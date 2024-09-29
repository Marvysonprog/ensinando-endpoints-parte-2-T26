import { client } from "../client"; 
import { Pessoas } from "../models/pessoas";

class PessoasServices {
    public static async getAllPessoas(): Promise<any> {
        let listaDePessoas: Pessoas [] = [];

        try {
            let response = await client.get("/people/")
            listaDePessoas.push(response.data.results);

            while (response.data.next) {
                response = await client.get(response.data.next);
                listaDePessoas.push(...response.data.results);
            }

            if (listaDePessoas.length > 0) {
                return listaDePessoas;
            } else {
                return "Error fetching data";
            }

        } catch (error) {
            return `Error fetching data: ${error}`;
        }
    }

    public static async getPessoasPorId(id: number): Promise<any> {
        let pessoaEncontrada: Pessoas;
    

    try {
        let response = await client.get(`/people/${id}/`)
        pessoaEncontrada = response.data 

        if(!pessoaEncontrada){
            return "Erro fetching data";
        } else {
            return pessoaEncontrada
        }
    } catch (error) {
        return `Error fetching data: ${error}`
    }
}}

export default PessoasServices;