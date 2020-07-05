const { Model, DataTypes } = require('sequelize');
const sequelize = require('../startup/db');

class Gallery extends Model {}

Gallery.init(
  {
    image: DataTypes.STRING,
    imageId: DataTypes.STRING,
    text: DataTypes.STRING,
  },
  { sequelize, modelName: 'gallery' }
);
sequelize.sync();

module.exports = Gallery;
