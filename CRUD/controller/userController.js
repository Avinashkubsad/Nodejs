// const mongoose = require("mongoose")

import User from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    console.log("data incoming")
    const userData = new User(req.body);

    const { email } = userData;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }

    const savedUser = await userData.save();
    res.status(200).json(savedUser);
  } catch {}
};

export const fetch = async (req, res) => {
  try {
    return res.json("Hello world");
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
