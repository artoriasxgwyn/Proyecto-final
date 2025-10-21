import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import colegios from "./routes/Colegio.js";

const app = express();

// Middleware para permitir que Express entienda 
app.use(express.json());


app.use(colegios);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
  mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Conectado a la base de datos"))
    .catch((error) => console.error("Error al conectar a la base de datos:", error));
});
