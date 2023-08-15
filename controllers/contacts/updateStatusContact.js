const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");


const updateStatusContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { favorite } = req.body;

    if (favorite === undefined) {
      throw HttpError(400, "missing field favorite");
    }

    const result = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
      {
        new: true,
      }
    );

    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};


module.exports = updateStatusContact;
