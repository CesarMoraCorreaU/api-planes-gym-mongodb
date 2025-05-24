const express = require("express");
const router = express.Router(); // Crea un enrutador de Express

// Importa los controladores que manejan la lógica de cada ruta
const createPlan = require("../controllers/plans/createPlan");
const getAllPlans = require("../controllers/plans/getAllPlans");
const getPlanById = require("../controllers/plans/getPlanById");
const updatePlan = require("../controllers/plans/updatePlan");
const deletePlan = require("../controllers/plans/deletePlan");

// Ruta para obtener todos los planes
router.get("/", getAllPlans);

// Ruta para obtener un plan específico por ID
router.get("/:id", getPlanById);

// Ruta para crear un nuevo plan
router.post("/", createPlan);

// Ruta para actualizar un plan existente por ID
router.put("/:id", updatePlan);

// Ruta para eliminar un plan por ID
router.delete("/:id", deletePlan);

module.exports = router; // Exporta las rutas para usarlas en la app principal
