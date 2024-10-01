import express, { json } from "express";
import { router as index } from "./routes";
import { planetasRouter } from "./routes/planetas";
import { pessoasRouter } from "./routes/pessoas";
import { filmesRouter } from "./routes/filmes";
import { testeRouter } from "./routes/teste";

const app = express();

app.use(json());
app.use("/", index);
app.use(planetasRouter);
app.use(pessoasRouter);
app.use(filmesRouter);
app.use(testeRouter)

export default app;
