// const mongoose = require("mongoose")

import User from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    console.log("data incoming")
    const userData = new User(req.body);

    const { email,phno } = userData;

      // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Validate phone number (exactly 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phno)) {
      return res.status(400).json({ message: "Phone number must be exactly 10 digits" });
    }                                                                                          //No spaces, no special characters, no country code
    
    const userExist = await User.findOne({ email });
    if (userExist) {
      console.log("user already exists")
      return res.status(400).json({ message: "User already exist" }); 
    }
    
    const savedUser = await userData.save();
    res.status(200).json(savedUser);

    console.log("dATA SAVED SUCCESSFULLY",savedUser);
  } catch (error){
    res.status(500).json({error : "Internal server error"})
  }
};


export const fetch = async (req, res) => {
  try {
    return res.json("Hello world");
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
