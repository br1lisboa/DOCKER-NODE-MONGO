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

// conexión a la BD en mongo
mongoose.connect(process.env.MONGO_URL, {
  dbName: process.env.MONGO_DB_NAME,
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
});
const db = mongoose.connection;

// middleware para usar las rutas
app.use("/techs", techRoutes);

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
