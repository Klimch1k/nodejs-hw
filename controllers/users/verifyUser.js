const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const verifyUser = async (req, res, next) => {
  const { verificationToken } = req.params;
  try {
    const user = await User.findOneAndUpdate(
      { verificationToken },
      { verificationToken: null, verify: true },
      { new: true }
    );

    if (!user) {
      throw HttpError(404, error.message);
    }

    res.status(200).json({ message: "Verification successful" });
  } catch (error) {
    next(error);
  }
};

module.exports = verifyUser;
