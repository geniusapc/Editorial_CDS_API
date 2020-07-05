const Joi = require('@hapi/joi');

const pattern = /^([O, Y]{2}\/)([0-9]{2}[A,B,C]\/)([0-9]{4})$/;

module.exports = (schemaCompare) =>
  Joi.object({
    stateCode: Joi.string().trim().regex(pattern).required(),

    password: Joi.string().trim().required(),

    confirmPassword: Joi.string()
      .valid(Joi.ref('password'))
      .options({
        language: {
          any: { allowOnly: 'must match password' },
        },
      })
      .required(),
  }).validate(schemaCompare);
