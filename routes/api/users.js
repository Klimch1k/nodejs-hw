const express = require("express")

const router = express.Router();

const authenticate = require("../../middlewares");
const controllers = require("../../controllers/users");

router.post('/register', controllers.singUp)

router.post('/login', controllers.login)

router.get("/current", authenticate, controllers.getCurrentUser);

router.post("/logout", authenticate, controllers.logout);

module.exports = router;