const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/contacts");
const authenticate = require("../../middlewares");

router.get("/", authenticate, controllers.getAllContacts);

router.get("/:contactId", authenticate, controllers.getContactById);

router.post("/", authenticate, controllers.addContact);

router.delete("/:contactId", authenticate, controllers.deleteContact);

router.put("/:contactId", authenticate, controllers.updateContactById);

router.patch(
  "/:contactId/favorite",
  authenticate,
  controllers.updateStatusContact
);

module.exports = router;

// shGBVz4DuCFYm0rP
