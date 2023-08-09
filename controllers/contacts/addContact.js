const { Contact, postContactSchema } = require("../../models/contact");
const { HttpError } = require("../../helpers");


const addContact = async (req, res, next) => {
  try {
    const { error } = postContactSchema.validate(req.body);

    if (error) {
      throw HttpError(400, error.message);
    }

    const result = await Contact.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
