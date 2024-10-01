import { Request, Response } from "express";
import { PostagemServices } from "../services/postagemServices";

export class PostagemController {
  static addPostagem = async (req: Request, res: Response) => {
    const novaPostagem = req.body;
    res.status(200).json(await PostagemServices.addNovaPostagem(novaPostagem));
  };

  static getAllPostagens = async (req: Request, res: Response) => {
    res.status(200).json(await PostagemServices.getAllDasPostagens());
  };
}
