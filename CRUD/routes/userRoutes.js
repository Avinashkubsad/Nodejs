import express from "express";
import { create,read,readById,update, deleteById} from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getallUsers", read);
route.get("/readById/:id",readById);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteById)

export default route;
