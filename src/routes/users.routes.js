import { createUser } from "../controllers/users.controllers.js";
import { showUsers } from "../controllers/users.controllers.js";
import { loginUser } from "../controllers/users.controllers.js";
import express from "express";


export const userRouter = express.Router();

userRouter.post("/registrar", createUser);
userRouter.get("/mostrar", showUsers);
userRouter.post("/iniciar-sesion", loginUser);
