const { Model, DataTypes } = require('sequelize');
const sequelize = require('../startup/db');

class Comment extends Model {}

Comment.init(
  {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.STRING,
    comment: DataTypes.STRING,
  },
  { sequelize, modelName: 'comment' }
);

sequelize.sync();

module.exports = Comment;
