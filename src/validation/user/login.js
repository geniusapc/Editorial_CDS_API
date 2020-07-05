const Joi = require('@hapi/joi');

module.exports = (schemaCompare) =>
  Joi.object({
    stateCode: Joi.string().required(),
    password: Joi.string().required(),
  }).validate(schemaCompare);
