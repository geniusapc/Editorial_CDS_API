const Joi = require("joi");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./db");

class Comment extends Model {}

Comment.init(
  {
    eventId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    comment: DataTypes.STRING
  },
  { sequelize, modelName: "comment" }
);

Comment.validate = schemaCompare => {
  return Joi.validate(schemaCompare, {
    eventId: Joi.number().required(),
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    comment: Joi.string()
      .min(3)
      .max(225)
      .required()
  });
};

sequelize.sync();

module.exports = Comment;
