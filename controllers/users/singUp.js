const bcrypt = require("bcrypt");
const gravatar = require("gravatar");


const { User, schemas } = require("../../models/user");
const { HttpError } = require("../../helpers");

const singUp = async (req, res, next) => {
  try {
    const { error } = schemas.registerSchema.validate(req.body);

    if (error) {
      throw HttpError(400, error.message);
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      throw HttpError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);

    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
      avatarURL,
    });

    const responseUser = {
      email: newUser.email,
      subscription: newUser.subscription,
    };

    res.status(201).json({ user: responseUser });
  } catch (error) {
    next(error);
  }
};

module.exports = singUp;
