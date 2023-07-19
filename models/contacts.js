const fs = require("fs/promises");
const path = require("path")

const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const allContacts = await listContacts();
  const contact = allContacts.find((item) => item.id === contactId);
  return contact;
};

const removeContact = async (contactId) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === contactId);

  if (index === -1) {
    return null;
  }

  const [result] = allContacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));

  return result;
};

const addContact = async (body) => {
  const { name, email, phone } = body;
  const newContact = {
    id: uuidv4(),
    name, email, phone 
  };
  const allContacts = await listContacts();

  allContacts.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));

  return newContact;
};

const updateContact = async (contactId, body) => {
  
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === contactId);
 
  
   if (index === -1) {
     return null;
  }
  
  if (body.name) {
    allContacts[index].name = body.name;
  }
  if (body.email) {
    allContacts[index].email = body.email;
  }
  if (body.phone) {
    allContacts[index].phone = body.phone;
  }
  
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));

  return allContacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
