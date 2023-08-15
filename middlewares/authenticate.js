const jwt = require("jsonwebtoken");

const { User } = require("../models/user");
const { HttpError } = require("../helpers");

const KEY = "YPmEb&54ff_H(@!";

const authenticate = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer") {
      next(HttpError(401));
    }

    const { id } = jwt.verify(token, KEY);

    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(HttpError(401));
    }
    req.user = user;
    next();
  } catch (error) {
    next(HttpError(401));
  }
};

module.exports = authenticate;
