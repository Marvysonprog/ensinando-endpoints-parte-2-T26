import { Request, Response } from "express";
import PlanetaServices from "../services/planetaServices";

class PlanetasController {
  static getAllPlanetas = async (req: Request, res: Response) => {
    res.status(200).json(await PlanetaServices.getAllPlanets());
  };

  static getPlanetaId = async (req: Request, res: Response) =>{
    const idConvertido = parseInt(req.params.id)
    res.status(200).json(await PlanetaServices.getPlanetaPorId(idConvertido));
  }; 

}

export { PlanetasController };
