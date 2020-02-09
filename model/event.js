const { Model, DataTypes, Sequelize } = require("sequelize");
const Joi = require("joi");
const sequelize = require("./db");
const Comment = require("./comment");

class Event extends Model {}

Event.init(
  {
    title: DataTypes.STRING,
    slugTitle: DataTypes.STRING,
    imageName: DataTypes.STRING,
    text: DataTypes.TEXT,
    likes: { type: Sequelize.ARRAY(Sequelize.INTEGER), defaultValue: [] }
  },
  { sequelize, modelName: "events" }
);

Comment.belongsTo(Event);
Event.hasMany(Comment);

Event.validate = schemaCompare =>
  Joi.validate(schemaCompare, {
    mimetype: Joi.string()
      .valid(["image/jpeg", "image/png"])
      .required(),
    title: Joi.string()
      .min(3)
      .max(225)
      .required(),
    text: Joi.string()
      .min(3)
      .required(),
    date: Joi.date().required()
  });

Event.validationImage = schemaCompare =>
  Joi.validate(schemaCompare, {
    mimetype: Joi.string()
      .valid(["image/jpeg", "image/png"])
      .required()
  });
Event.validateInputText = schemaCompare =>
  Joi.validate(schemaCompare, {
    text: Joi.string()
      .min(3)
      .required(),
    title: Joi.string()
      .min(3)
      .max(225)
      .required()
  });

Event.uploadImage = function(image, path) {
  image.mv(path, err => {
    if (err) return this.res.status(500).send(err);
  });
};

sequelize.sync();

module.exports = Event;