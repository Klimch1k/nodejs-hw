const Joi = require("joi");

const postContactSchema = Joi.object({
  name: Joi.string().max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

const putContactSchema = Joi.object({
  name: Joi.string().max(30),
  email: Joi.string().email(),
  phone: Joi.string(),
});



module.exports = {
  postContactSchema,
  putContactSchema,
};