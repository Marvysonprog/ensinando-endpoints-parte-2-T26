import { client } from "../client";
import { Filmes } from "../models/filmes";

export class FilmesServices {
  public static async getAllFilmes(): Promise<any> {
    let listaDeFilmes: Filmes[] = [];

    try {
      let response = await client.get("/films/");
      listaDeFilmes.push(response.data.results);

      while (response.data.next) {
        response = await client.get(response.data.next);
        listaDeFilmes.push(...response.data.results);
      }

      if (listaDeFilmes.length > 0) {
        return listaDeFilmes;
      } else {
        return "Error fetching data";
      }
    } catch (error) {
      return `Error fetching data: ${error}`;
    }
  }
}
