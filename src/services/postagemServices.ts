import { title } from "process";
import { client2 } from "../client";
import { Postagem } from "../models/postagem";
import { timingSafeEqual } from "crypto";

export class PostagemServices {
  public static async addNovaPostagem(postagem: Postagem): Promise<any> {
    let postagemEncontrada: Postagem;

    try {
      const response = await client2.post("/posts", postagem);
      postagemEncontrada = response.data;

      if (postagemEncontrada) {
        return postagemEncontrada;
      } else {
        return "Error fetching data";
      }
    } catch (error) {
      return `Error fetching data: ${error}`;
    }
  }

  public static async getAllDasPostagens(): Promise<any> {
    let listasDePostagens: Postagem[] = [];

    try {
      let response = await client2.get("/posts");
      listasDePostagens.push(response.data);

      while (response.data.next) {
        response = await client2.get(response.data.next);
        listasDePostagens.push(...response.data);
      }

      if (listasDePostagens.length > 0) {
        return listasDePostagens;
      } else {
        return "Error fetching data";
      }
    } catch (error) {
      return `Error fetching data: ${error}`;
    }
  }
  public static async updateDeUmaInformacao(id: number, dados: { title?: string; body?: string }): Promise<any> {
    let postagemModificada: Postagem;

    try {
      let response = await client2.patch(`/posts/${id}`, dados);
      postagemModificada = response.data

      if (!postagemModificada) {
        return "Error fetching data";
      } else {
        return postagemModificada
      }
    } catch (error) {
      return `Error fetching data: ${error}`;
    }
  }
}
