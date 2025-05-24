const Plan = require("../../models/Plan"); // Importa el modelo 'Plan'

// Función para obtener un plan específico por su ID
const getPlanById = async (req, res) => {
  try {
    // Busca el plan por su ID
    const plan = await Plan.findById(req.params.id);

    // Si no se encuentra, retorna error 404
    if (!plan) return res.status(404).json({ message: "Plan no encontrado" });

    // Devuelve el plan encontrado
    res.status(200).json(plan);
  } catch (error) {
    // Si ocurre un error, responde con código 500
    res.status(500).json({ message: "Error al buscar el plan", error });
  }
};

module.exports = getPlanById;
