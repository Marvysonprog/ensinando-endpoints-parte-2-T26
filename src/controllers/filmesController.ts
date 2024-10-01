import { Request, Response } from "express";
import { FilmesServices } from "../services/filmesServices";

class FilmesController {
  static getAllFilmes = async (req: Request, res: Response) => {
    res.status(200).json(await FilmesServices.getAllFilmes());
  };
}

export { FilmesController };
