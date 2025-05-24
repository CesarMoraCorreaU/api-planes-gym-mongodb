const Plan = require("../../models/Plan"); // Importa el modelo 'Plan'

// Función para obtener todos los planes
const getAllPlans = async (req, res) => {
  try {
    // Busca todos los planes en la base de datos
    const plans = await Plan.find();

    // Devuelve la lista de planes
    res.status(200).json(plans);
  } catch (error) {
    // Si ocurre un error, responde con mensaje de error
    res.status(500).json({ message: "Error al obtener los planes", error });
  }
};

module.exports = getAllPlans;
