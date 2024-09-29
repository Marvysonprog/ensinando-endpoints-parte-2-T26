import { Router } from "express";
import { PessoasController } from "../controllers/pessoasController"

export const pessoasRouter = Router();

pessoasRouter.get("/pessoas", PessoasController.getAllPessoas);

pessoasRouter.get("/pessoas/:id", PessoasController.getPessoasId);