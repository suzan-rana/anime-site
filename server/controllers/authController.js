import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
const secret = "test";
export const registerUser = async (req, res) => {
  console.log("Request.");
  const { firstName, lastName, password, confirmPassword, email } =
    req.body;
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
      id: newUser._id
    }
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

export const loginUser = async (req, res) => {};
