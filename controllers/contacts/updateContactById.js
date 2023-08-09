const { Contact, putContactSchema } = require("../../models/contact");
const { HttpError } = require("../../helpers");


const updateContactById = async (req, res, next) => {
  try {
    const { error } = putContactSchema.validate(req.body);

    if (error) {
      throw HttpError(400, error.message);
    }

    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });

    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateContactById;