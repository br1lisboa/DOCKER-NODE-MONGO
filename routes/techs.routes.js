// rutas
const express = require("express");

// instanciamos el router y importamos el modelo
const router = express.Router();
const TECH_MODEL = require("../models/techs.models");

// MIDDLEWARE
async function getTech(req, res, next) {
  let tech;
  const { id } = req.params;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(404).json({ message: "ID inválido" });
  }

  try {
    tech = await TECH_MODEL.findById(id);

    if (!tech) {
      return res.status(404).json({ message: "Tecnología no encontrada" });
    }

    res.tech = tech;
    next();
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

// OBTENER TODOS LOS TECHS
router.get("/", async (req, res) => {
  try {
    const techs = await TECH_MODEL.find();
    console.log("GET ALL", techs);

    if (techs.length === 0) {
      return res
        .status(204)
        .json({ message: "No hay tecnologías en la base de datos" });
    }

    res.json(techs);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// OBTENER UN TECH
router.get("/:id", getTech, async (req, res) => {
  res.json(req.tech);
});

// CREAR UN RECURSO
router.post("/", async (req, res) => {
  const { title, description, programming_type, create_at } = req?.body;

  if (!title || !description || !programming_type) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  try {
    // método menos directo pero que permite manejar mas los datos
    // const newTech = new TECH_MODEL({
    //   title,
    //   description,
    //   programming_type,
    //   create_at,
    // });

    // await newTech.save();

    await TECH_MODEL.create({
      title,
      description,
      programming_type,
      create_at,
    });

    res.status(201).json({ message: "Recurso creado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// EDITAR UN RECURSO
router.put("/:id", getTech, async (req, res) => {
  try {
    const tech = res.tech;
    tech.title = req.body.title || tech.title;
    tech.description = req.body.description || tech.description;
    tech.programming_type = req.body.programming_type || tech.programming_type;
    tech.create_at = req.body.create_at || tech.create_at;

    await tech.save();

    res.status(200).json({ message: "Recurso actualizado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PATCH PARA ACTUALIZAR UN RECURSO
router.patch("/:id", getTech, async (req, res) => {
  if (!req.body.title && !req.body.description && !req.body.programming_type) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  try {
    const tech = res.tech;
    tech.title = req.body.title || tech.title;
    tech.description = req.body.description || tech.description;
    tech.programming_type = req.body.programming_type || tech.programming_type;
    tech.create_at = req.body.create_at || tech.create_at;

    await tech.save();

    res.status(200).json({ message: "Recurso actualizado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ELIMINAR UN RECURSO
router.delete("/:id", getTech, async (req, res) => {
  try {
    await TECH_MODEL.deleteOne({ _id: res.tech._id });
    res.status(200).json({ message: "Recurso eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
