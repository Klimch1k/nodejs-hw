const nodemailer = require("nodemailer");
require("dotenv").config();


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

const sendVerificationEmail = async (email, verificationToken) => {
  const mailOptions = {
    from: "yura.klim@meta.ua",
    to: email,
    subject: "Подтвердите свой email",
    html: `<a href="http://localhost:3000/users/verify/${verificationToken}">Подтвердите свой email</a>`,
  };

  try {
    console.log(mailOptions);
    await transporter.sendMail(mailOptions);
    console.log(`Verification email has been sent to ${email}`);
  } catch (error) {
    console.log(`Error while sending email to ${email}: `, error);
  }
};



module.exports = sendVerificationEmail;