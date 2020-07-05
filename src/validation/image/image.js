const Joi = require('@hapi/joi');

const files = {
  image: Joi.object()
    .keys({
      mimetype: Joi.string().required(),
      size: Joi.number()
        .max(1024 * 1024)
        .message('Image should be less than 1mb'),
    })
    .required()
    .messages({ 'object.base': 'Image is required' })
    .unknown(),
};

module.exports = (schemaCompare) =>
  Joi.object(files)
    .messages({ 'object.base': 'Image is required' })
    .validate(schemaCompare);
