const Joi = require('@hapi/joi');

module.exports = (schemaCompare) =>
  Joi.object({
    eventId: Joi.number().required(),
    name: Joi.string().min(5).max(50).required(),
    comment: Joi.string().min(3).max(225).required(),
  }).validate(schemaCompare);
