const Joi = require('@hapi/joi');

module.exports = (schemaCompare) =>
  Joi.object({
    text: Joi.string().min(3).required(),
  }).validate(schemaCompare);
