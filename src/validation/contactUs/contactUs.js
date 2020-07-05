const Joi = require('@hapi/joi');

module.exports = (schemaCompare) =>
  Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email(),
    message: Joi.string().max(225).required(),
  }).validate(schemaCompare);
