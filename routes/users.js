// routes/users.js
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersPath = path.join(__dirname, "../data/users.json");

router.get("/", (req, res) => {
  fs.readFile(usersPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer users.json:", err);
      return res.status(500).json({ message: "Error al leer los datos de usuarios" });
    }

    const users = JSON.parse(data);
    res.json(users);
  });
});

router.get("/:id", (req, res) => {
  fs.readFile(usersPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer users.json:", err);
      return res.status(500).json({ message: "Error al leer los datos de usuarios" });
    }

    const users = JSON.parse(data);
    const user = users.find((u) => u._id === req.params.id);

    if (!user) {
      return res.status(404).json({ message: "ID no encontrado" });
    }

    res.json(user);
  });
});

export default router;
