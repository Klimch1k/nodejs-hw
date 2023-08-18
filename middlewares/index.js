const jwt = require("jsonwebtoken");

const authenticate = require("./authenticate");
const upload = require("./upload")

module.exports = {upload, authenticate}
