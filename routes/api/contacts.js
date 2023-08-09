const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/contacts");

router.get("/", controllers.getAllContacts);

router.get("/:contactId", controllers.getContactById);

router.post("/", controllers.addContact);

router.delete("/:contactId", controllers.deleteContact);

router.put("/:contactId", controllers.updateContactById);

router.patch("/:contactId/favorite", controllers.updateStatusContact);

module.exports = router;

// shGBVz4DuCFYm0rP
