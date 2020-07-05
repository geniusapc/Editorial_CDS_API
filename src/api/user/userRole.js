const User = require('../../model/User');

module.exports = async (req, res) => {
  const [updated] = await User.update(
    { role: 'user', isAdmin: false },
    { where: { id: req.params.id } }
  );
  if (!updated)
    return res.status(400).send('Failed to update please check User Id');

  return res.status(200).send('success');
};
