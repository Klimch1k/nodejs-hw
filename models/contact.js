const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

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

const Contact = model("contact", contactSchema);

module.exports = { Contact, postContactSchema, putContactSchema };
