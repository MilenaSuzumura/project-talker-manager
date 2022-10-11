const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().min(15).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  .required(),
  password: joi.string().min(6).required(),
});

const validator = async (info) => {
  const { error } = loginSchema.validate(info);
  console.log(error);
};

module.exports = validator;
