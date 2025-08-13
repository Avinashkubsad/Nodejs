import mongoose from "mongoose";
import User from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    console.log("data incoming");
    const userData = new User(req.body);

    const { email, phno } = userData;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Validate phone number (exactly 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phno)) {
      return res
        .status(400)
        .json({ message: "Phone number must be exactly 10 digits" });
    } //No spaces, no special characters, no country code

    const userExist = await User.findOne({ email });
    if (userExist) {
      console.log("user already exists");
      return res.status(400).json({ message: "User already exist" });
    }

    const savedUser = await userData.save();
    res.status(200).json(savedUser);

    console.log("dATA SAVED SUCCESSFULLY", savedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const read = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({ user });
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const readById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Incoming request to readById. ID received:", id);

    // Check if ID is provided
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ObjectId format:", id);
      return res.status(400).json({ message: "Invalid ID format" });
    }

    // Find user by ID
    const user = await User.findById(id);
    console.log("Query executed. User found:", user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error reading document by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id for update operation", id);

    const userExist = await User.findOne({ _id: id });

    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }

    const userUpdate = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(userUpdate);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteById = async (req, res) => {
  try {
    const { id } = req.params;

    const userExist = await User.findOne({ _id: id });

    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }

    const userDelete = await User.findByIdAndDelete(id);
    res.status(200).json(userDelete);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};

// export const readOne = async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("Incoming request to readOne. ID received:", id);

//     // Validate MongoDB ObjectId format
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       console.log("Invalid ObjectId format:", id);
//       return res.status(400).json({ message: "Invalid user ID" });
//     }

//     const user = await findOneById({ id });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json({ user });
//     console.log("the deatils of user", user);
//   } catch {
//     res.staus(500).json({ error: "Internal server error" });
//   }
// };
// export const fetch = async (req, res) => {
//   try {
//     return res.json("Hello world");
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
