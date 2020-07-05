const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../startup/db');

class Users extends Model {}

Users.init(
  {
    stateCode: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: { type: Sequelize.BOOLEAN, defaultValue: false },
    role: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'user',
      validate: {
        isIn: [['editor', 'moderator', 'user']],
      },
    },
  },
  { sequelize, modelName: 'users' }
);

sequelize.sync();

module.exports = Users;
