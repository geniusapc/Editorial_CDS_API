const Joi = require('@hapi/joi');

module.exports = (schemaCompare) =>
  Joi.object({
    title: Joi.string().min(3).max(225).required(),
    text: Joi.string().min(3).required(),
    date: Joi.date(),
  }).validate(schemaCompare);
