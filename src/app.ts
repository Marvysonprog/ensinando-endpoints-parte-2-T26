import express, { json } from "express";
import { router as index } from "./routes";
import { planetasRouter } from "./routes/planetas";
import { pessoasRouter } from "./routes/pessoas";



const app = express();

app.use(json());
app.use("/", index);
app.use(planetasRouter);
app.use(pessoasRouter); 


export default app;
