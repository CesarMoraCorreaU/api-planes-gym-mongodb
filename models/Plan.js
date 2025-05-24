const mongoose = require("mongoose"); // Importa mongoose para modelar datos

// Define el esquema del plan
const planSchema = new mongoose.Schema({
  nombre: { type: String, required: true }, // Nombre del plan, obligatorio
  descripcion: { type: String, required: true }, // Descripción del plan
  precio: { type: Number, required: true }, // Precio del plan
  duracion_dias: { type: Number, required: true }, // Duración del plan en días
  acceso_piscina: { type: Boolean, default: false }, // Acceso a piscina (opcional, por defecto falso)
  acceso_clases_grupales: { type: Boolean, default: false }, // Acceso a clases grupales
  acceso_personal_trainer: { type: Boolean, default: false }, // Acceso a entrenador personal
});

// Exporta el modelo 'Plan' basado en el esquema
module.exports = mongoose.model("Plan", planSchema);
