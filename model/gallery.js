const { Model, DataTypes } = require("sequelize");
const Joi = require("joi");
const sequelize = require("./db");

class Gallery extends Model {}

Gallery.init(
  {
    image: DataTypes.STRING,
    imageId: DataTypes.STRING,
    text: DataTypes.STRING
  },
  { sequelize, modelName: "gallery" }
);
sequelize.sync();

Gallery.validate = schemaCompare => {
  return Joi.validate(schemaCompare, {
    mimetype: Joi.string()
      .valid(["image/jpeg", "image/png"])
      .required(),
    text: Joi.string()
      .min(3)
      .required()
  });
};

module.exports = Gallery;
