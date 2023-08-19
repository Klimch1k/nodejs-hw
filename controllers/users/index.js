const singUp = require("./singUp");
const login = require("./login");
const getCurrentUser = require("./getCurrentUser")
const logout = require("./logout")
const updateAvatar = require("./updateAvatar")
const verifyUser = require("./verifyUser")
const resendVerifyEmail = require("./recendVerifyEmail")

module.exports = {
  singUp,
  login,
  getCurrentUser,
  logout,
  updateAvatar,
  verifyUser,
  resendVerifyEmail,
};
