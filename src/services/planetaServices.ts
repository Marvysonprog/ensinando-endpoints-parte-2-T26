
import { client, client2 } from "../client";
import { Planeta } from "../models/planetas";

class PlanetaServices {
  public static async getAllPlanets(): Promise<any> {
    let listaPlanetas: Planeta[] = [];

    try {
      let response = await client.get("/planets/")
      listaPlanetas.push(response.data.results);

      while (response.data.next) {
        response = await client.get(response.data.next);
        listaPlanetas.push(...response.data.results);
      }

      if (listaPlanetas.length > 0) {
        return listaPlanetas;
      } else {
        return "Error fetching data";
      }

    } catch (error) {
      return `Error fetching data: ${error}`;
    }
  }

  public static async getPlanetaPorId(id: number): Promise<any> {
    let planetaEncontrado: Planeta;

    try {
      let response = await client.get(`/planets/${id}/`)
      planetaEncontrado = response.data

      if (!planetaEncontrado) {
        return "Error fetching data";
      } else {
        return planetaEncontrado
      }
    } catch (error) {
      return `Error fetching data: ${error}`;
    }
  }

  public static async updateNomeDoPlaneta(id: number, nome: string): Promise<any> {
    let planetaEncontrado: Planeta;

    try {
      let response = await client2.patch(`/planetas/${id}`, {
        name: nome
      });

      planetaEncontrado = response.data

      if (!planetaEncontrado) {
        return "Error fetching data";
      } else {
        return planetaEncontrado
      }

    } catch (error) {
      return `Error fetching data: ${error}`;
    }
  }

}

export default PlanetaServices;
