// routes/cards.js
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cardsPath = path.join(__dirname, "../data/cards.json");

router.get("/", (req, res) => {
  fs.readFile(cardsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer cards.json:", err);
      return res.status(500).json({ message: "Error al leer los datos de tarjetas" });
    }

    const cards = JSON.parse(data);
    res.json(cards);
  });
});

export default router;

