const { EncodeToken } = require("../utility/TokenHelper");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
exports.SignUp = async (req, res) => {
  try {
    const { fullName, phoneNumber, password } = req.body;
    // password validation
    if (password.length < 4) {
      return res.status(400).json({
        success: false,
        message: "The length of User password can be minimum 4 characters",
      });
    }

    // existing user
    const existingUser = await UserModel.findOne({ phoneNumber });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exist" });
    }
    // Hashed Password
    const hashedPassword = await bcrypt.hash(password, 8);

    // create user
    await UserModel.create({
      fullName,
      phoneNumber,
      password: hashedPassword,
    });

    // response
    res.status(201).json({
      success: true,
      message: "User Registration Successful",
    });
  } catch (error) {
    res.status(200).json({ status: false });
  }
};

exports.login = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;
    // Check if the user exists
    const user = await UserModel.findOne({ phoneNumber });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User is not registered" });
    }
    // password matching
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Crediantial" });
    }
    // generate token
    const token = EncodeToken({ user });
    // response
    res.status(200).json({
      success: true,
      message: "User Login Successful",
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

exports.UserLogout = async (req, res) => {
  let cookieOption = {
    expires: new Date(Date.now() - 60 * 60 * 60 * 1000),
    httpOnly: false,
  };
  res.cookie("token", "", cookieOption);
  return res.status(200).json({ status: "success" });
};
