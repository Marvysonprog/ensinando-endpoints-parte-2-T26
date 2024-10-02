import { Router } from "express";
import { PostagemController } from "../controllers/postagemController";


export const postagemRouter = Router ();

postagemRouter.post("/postagem", PostagemController.addPostagem);
postagemRouter.get("/postagem", PostagemController.getAllPostagens);
postagemRouter.patch("/postagem/:id", PostagemController.updateUmaInformacao)