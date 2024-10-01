import { Router } from "express";
import { FilmesController } from "../controllers/filmesController";

export const filmesRouter = Router();

filmesRouter.get("/filmes", FilmesController.getAllFilmes);
