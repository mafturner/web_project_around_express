// app.js
import express from "express";
import open from "open";
import path from "path";
import { fileURLToPath } from "url";

import usersRouter from "./routes/users.js";
import cardsRouter from "./routes/cards.js";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.get("/", (req, res) => {
  res.send("Servidor Express funcionando correctamente.");
});

app.use((req, res) => {
  res.status(404).json({ message: "Recurso no encontrado" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  open(`http://localhost:${PORT}`);
});
