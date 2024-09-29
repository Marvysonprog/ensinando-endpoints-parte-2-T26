import { Request, Response} from "express";
import  PessoasServices  from "../services/pessoasServices";


class PessoasController{
    static getAllPessoas = async (req: Request, res: Response) => {
        res.status(200).json(await PessoasServices.getAllPessoas());
    }

    static getPessoasId = async (req: Request, res: Response) => {
        const idConvertido = parseInt(req.params.id)
        res.status(200).json(await PessoasServices.getPessoasPorId(idConvertido));
    }
}

export  { PessoasController };