const User = require('../../model/User');

module.exports = async (req, res) => {
  const deleted = await User.destroy({ where: { id: req.params.id } });
  if (!deleted) return res.status(400).send('Failed to delete');
  return res.status(200).send('User deleted successfully');
};
