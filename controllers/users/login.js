const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User, schemas } = require("../../models/user");
const { HttpError } = require("../../helpers");

const KEY = "YPmEb&54ff_H(@!";

const login = async (req, res, next) => {
  try {
    const { error } = schemas.loginSchema.validate(req.body);

    if (error) {
      throw HttpError(400, error.message);
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      throw HttpError(401, "Email or password is wrong");
      }
      
      const passwordCompare = await bcrypt.compare(password, user.password);
      
      if (!passwordCompare) {
        throw HttpError(401, "Email or password invalid");
      }

        const payload = {
          id: user._id,
        };

    const token = jwt.sign(payload, KEY, { expiresIn: "23h" });
     await User.findByIdAndUpdate(user._id, { token });

       const responseUser = {
         email: user.email,
         subscription: user.subscription,
      };
      
       res.status(200).json({token, user: responseUser });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
