import { Request, Response } from "express";
import { TesteServices } from "../services/testeServices";

class TesteController {
  static getAllUsers = async (req: Request, res: Response) => {
    res.status(200).json(await TesteServices.getTodosUsers());
  };
}

export { TesteController };
