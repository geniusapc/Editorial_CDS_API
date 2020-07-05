const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../startup/db');
const Comment = require('./Comment');

class Event extends Model {}

Event.init(
  {
    title: DataTypes.STRING,
    slugTitle: DataTypes.STRING,
    image: DataTypes.STRING,
    imageId: DataTypes.STRING,
    text: DataTypes.TEXT,
    likes: { type: Sequelize.ARRAY(Sequelize.INTEGER), defaultValue: [] },
  },
  { sequelize, modelName: 'events' }
);

Comment.belongsTo(Event);
Event.hasMany(Comment);

sequelize.sync();

module.exports = Event;
