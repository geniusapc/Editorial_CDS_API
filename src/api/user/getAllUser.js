const User = require('../../model/User');

module.exports = async (req, res) => {
  let users = await User.findAll();
  users.map((e) => delete e.dataValues.password);
  res.status(200).json(users);
};
