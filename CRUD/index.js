import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import route from "./routes/userRoutes.js"; 

const app = express();

app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(async () => {
    console.log("Database connected succesfully");

    // // Check MongoDB databases
    // const dbs = await mongoose.connection.db.admin().listDatabases();
    // console.log("📂 Databases:", dbs);

    app.listen(PORT, () => {
      console.log(`Server is rnning on PORT ${PORT} `);
    });
  })
  .catch((error) => console.log(error));

app.use("/api/user",route);