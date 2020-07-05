const User = require('../../model/User');

module.exports = async (req, res) => {
  const [updated] = await User.update(
    { role: 'moderator', isAdmin: true },
    { where: { id: req.params.id } }
  );
  if (!updated) return res.status(400).send('Failed to update');
  return res.status(200).send('success');
};
