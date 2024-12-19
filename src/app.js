// puerta de entrada de la app
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { config } = require("dotenv");
config();

const techRoutes = require("../routes/techs.routes");

// es una instancia de express, crea un objeto con herramientas para crear un servidor en app
const app = express();
// es un middleware que se utiliza para parser los json enviados en la request
app.use(bodyParser.json());

console.log("MONGO_URL:", process.env.MONGO_URL);
console.log("MONGO_DB_NAME:", process.env.MONGO_DB_NAME);
console.log("MONGO_USER:", process.env.MONGO_USER);
console.log("MONGO_PASS:", process.env.MONGO_PASS);

// conexión a la BD en mongo
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: process.env.MONGO_DB_NAME,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
  })
  .then(() => console.log("Conexión exitosa a la base de datos"))
  .catch((error) =>
    console.error("Error al conectar a MongoDB:", error.message)
  );

// middleware para usar las rutas
app.use("/techs", techRoutes);

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
