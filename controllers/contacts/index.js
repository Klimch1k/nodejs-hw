const addContact = require("../contacts/addContact");
const deleteContact = require("../contacts/deleteContact");
const getAllContacts = require("../contacts/getAllContacts");
const getContactById = require("../contacts/getContactById");
const updateContactById = require("../contacts/updateContactById");
const updateStatusContact = require("../contacts/updateStatusContact");

module.exports = {
  addContact,
  deleteContact,
  getAllContacts,
  getContactById,
  updateContactById,
  updateStatusContact,
};
