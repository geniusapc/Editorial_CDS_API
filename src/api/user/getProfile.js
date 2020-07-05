const User = require('../../model/User');

module.exports = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  if (user) delete user.dataValues.password;
  return res.status(200).json(user);
};
