const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().min(15).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  .required(),
  password: Joi.string().min(6).required(),
});

const validator = async (info) => loginSchema.validate(info);

module.exports = { validator };
