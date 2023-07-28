const contacts = require("../models/contacts");
const { HttpError } = require("../helpers");
const {
  postContactSchema,
  putContactSchema,
} = require("../schemas/schemas");

// Контроллер запиту всіх контактів
const getAllContacts = async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// Контроллер контаку по ID
// const getContactById = async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await contacts.getContactById(contactId);

//     if (!result) {
//       throw HttpError(404, "Not found");
//     }

//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// Контроллер додавання контаку
// const addContact = async (req, res, next) => {
//   try {
//     const { error } = postContactSchema.validate(req.body);

//     if (error) {
//       throw HttpError(400, error.message);
//     }

//     const result = await contacts.addContact(req.body);
//     res.status(201).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// Контроллер оновлення інформіції щодо контаку 
// const updateContactById = async (req, res, next) => {
//   try {
//     const { error } = putContactSchema.validate(req.body);

//     if (error) {
//       throw HttpError(400, error.message);
//     }

//     const { contactId } = req.params;
//     const result = await contacts.updateContact(contactId, req.body);

//     if (!result) {
//       throw HttpError(404, "Not found");
//     }

//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// Контроллер видалення контаку 
// const deleteContact = async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await contacts.removeContact(contactId);

//     if (!result) {
//       throw HttpError(404, "Not found");
//     }

//     res.status(200).json({
//       message: "contact deleted",
//     });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
//   getContactById,
  getAllContacts,
//   addContact,
//   updateContactById,
//   deleteContact,
};
