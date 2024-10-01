import { client2 } from "../client";
import { Teste } from "../models/teste";

export class TesteServices {
    public static async getTodosUsers(): Promise<any> {
        let listaDeUsers: Teste[] = [];

        try {
            let response = await client2.get("/users");
            listaDeUsers.push(response.data);

            while (response.data.next) {
                response = await client2.get(response.data.next);
                listaDeUsers.push(...response.data);
            }

            if (listaDeUsers.length > 0) {
                return listaDeUsers;
            } else {
                return "Error fetching data";
            }
        } catch (error) {
            return `Error fetching data: ${error}`;
        }
    }
}
