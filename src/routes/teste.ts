import { Router } from "express";
import { TesteController } from "../controllers/testeController";

export const testeRouter = Router();

testeRouter.get("/users", TesteController.getAllUsers);
