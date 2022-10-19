import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
const secret = "test";
export const registerUser = async (req, res) => {
  console.log("Request.");
  const { firstName, lastName, password, confirmPassword, email } = req.body;
  if (!firstName || !lastName || !password || !confirmPassword || !email)
    return res.status(400).json({ message: "Please fill all details." });
  if (password !== confirmPassword)
    return res.status(400).json({ message: "The passwords donot match." });

  try {
    const oldUser = await User.findOne({ email });
    if (oldUser)
      return res.status(400).json({ message: "User already exists." });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name: `${firstName} ${lastName}`,
      email,
      password: hashedPassword,
    });
    console.log(newUser);
    const token = jwt.sign({ email, id: newUser._id }, secret, {
      expiresIn: "1hr",
    });
    const responseToUser = {
      email: newUser.email,
      name: newUser.name,
      id: newUser._id,
    };
    res.json({
      responseToUser,
      token,
    });
  } catch (error) {
    console.log("ERROR IS ==========", error);
    res.status(404).json({
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res.status(400).json({ message: "Enter credentials." });
    const currentUser = await User.findOne({ email: email });
    if (!currentUser)
      return res.status(400).json({ message: "User doesnot exist." });
    const isValidPassword = await bcrypt.compare(
      password,
      currentUser.password
    );
    if (!isValidPassword)
      return res.status(400).json({
        message: "Wrong Password.",
      });
    const responseToUser = {
      email,
      password,
      id: currentUser._id,
    };
    const token = jwt.sign(responseToUser, secret, { expiresIn: "1hr" });
    return res.status(200).json({
      responseToUser,
      token,
    });
  } catch (error) {
    console.log(error, "error")
    res.status(500).json(error)
  }
};
