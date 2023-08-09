const {
  Contact,
  postContactSchema,
  putContactSchema,
} = require("../models/contact");
const { HttpError } = require("../helpers");


// Контроллер запиту всіх контактів
const getAllContacts = async (req, res, next) => {
  try {
    const result = await Contact.find();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// Контроллер контаку по ID
const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);

    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// Контроллер додавання контаку
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

// Контроллер оновлення інформіції щодо контаку
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

// Контроллер оновлення статусу контакту
const updateStatusContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { favorite } = req.body;

    if (favorite === undefined) {
      throw HttpError(400, "missing field favorite");
    }

    const result = await Contact.findByIdAndUpdate(contactId, { favorite }, {
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

// Контроллер видалення контаку
const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);

    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json({
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContactById,
  getAllContacts,
  addContact,
  updateContactById,
  deleteContact,
  updateStatusContact,
};
