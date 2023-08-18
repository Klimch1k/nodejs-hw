const express = require("express")

const router = express.Router();

const { authenticate, upload } = require("../../middlewares");
const controllers = require("../../controllers/users");

router.post('/register', controllers.singUp)

router.post('/login', controllers.login)

router.get("/current", authenticate, controllers.getCurrentUser);

router.post("/logout", authenticate, controllers.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), controllers.updateAvatar);

module.exports = router;