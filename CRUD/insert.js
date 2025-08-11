// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const MONGODB_URI = process.env.MONGODB_URI;

// // 1️⃣ Define User Schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number
// });

// // 2️⃣ Create Model
// const User = mongoose.model("User", userSchema);

// // 3️⃣ Insert Function
// async function insertUser() {
//   try {
//     await mongoose.connect(MONGODB_URI);
//     console.log("✅ Connected to MongoDB Atlas");

//     const newUser = new User({
//       name: "Avinash",
//       email: "avinash@example.com",
//       age: 28
//     });

//     const savedUser = await newUser.save();
//     console.log("🎯 User inserted:", savedUser);

//   } catch (err) {
//     console.error("❌ Error inserting user:", err);
//   } finally {
//     await mongoose.disconnect();
//     console.log("🔌 Disconnected from MongoDB");
//   }
// }

// insertUser();
