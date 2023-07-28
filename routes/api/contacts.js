const express = require('express')
const router = express.Router()

const contacts = require("../../models/contacts")

const controllers = require('../../controllers/contacts')


router.get('/', controllers.getAllContacts)

// router.get('/:contactId', controllers.getContactById)

// router.post("/",  controllers.addContact);

// router.delete('/:contactId', controllers.deleteContact)

// router.put('/:contactId', controllers.updateContactById)

module.exports = router



// shGBVz4DuCFYm0rP