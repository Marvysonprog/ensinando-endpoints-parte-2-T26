import axios from "axios";

export const client = axios.create({
  baseURL: "https://swapi.dev/api",
  timeout: 5000,
  params: { format: "json" },
});

export const client2 = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
  params: { format: "json" },
});
