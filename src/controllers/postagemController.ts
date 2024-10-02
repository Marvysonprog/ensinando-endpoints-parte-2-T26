import { Request, Response } from "express";
import { PostagemServices } from "../services/postagemServices";
import { Postagem } from "../models/postagem";

export class PostagemController {
  static addPostagem = async (req: Request, res: Response) => {
    const novaPostagem = req.body;
    res.status(200).json(await PostagemServices.addNovaPostagem(novaPostagem));
  };

  static getAllPostagens = async (req: Request, res: Response) => {
    res.status(200).json(await PostagemServices.getAllDasPostagens());
  };

  static updateUmaInformacao = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const {title, body} = req.body
    res.status(200).json(await PostagemServices.updateDeUmaInformacao(id, {title, body}))
  }
}


