const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../startup/db');
const Comment = require('./Comment');

class Event extends Model {}

Event.init(
  {
    title: DataTypes.STRING,
    slugTitle: DataTypes.STRING,
    url: DataTypes.STRING,
    imageId: DataTypes.STRING,
    text: DataTypes.TEXT,
  },
  { sequelize, modelName: 'events' }
);

Comment.belongsTo(Event);
Event.hasMany(Comment);

sequelize.sync();

module.exports = Event;
