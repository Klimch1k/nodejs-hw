const nodemailer = require("nodemailer");
require("dotenv").config();

const { User, schemas } = require("../../models/user");
const { HttpError } = require("../../helpers");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const resendVerifyEmail = async (req, res, next) => {
  try {
    const { error } = schemas.verifySchema.validate(req.body);

    if (error) {
      throw HttpError(400, error.message);
    }

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!email) {
      throw HttpError(400, "missing required field email");
    }

    if (!user) {
      throw HttpError(401, "Email not found");
    }

    if (user.verify) {
      throw HttpError(400, "Verification has already been passed");
    }

    const mailOptions = {
      from: "yura.klim@meta.ua",
      to: email,
      subject: "Подтвердите свой email",
      html: `<a href="http://localhost:3000/users/verify/${user.verificationToken}">Подтвердите свой email</a>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Verification email sent" });
  } catch (error) {
    next(error);
  }
};


module.exports = resendVerifyEmail;