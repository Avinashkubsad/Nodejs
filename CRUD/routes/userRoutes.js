import express from "express";
import { create,read,readById } from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getallUsers", read);
route.get("/readById/:id",readById);

export default route;
