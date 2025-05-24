const Plan = require("../../models/Plan"); // Importa el modelo 'Plan'

// Función para eliminar un plan por su ID
const deletePlan = async (req, res) => {
  try {
    // Busca y elimina el plan por su ID (req.params.id)
    const deletedPlan = await Plan.findByIdAndDelete(req.params.id);

    // Si no se encuentra el plan, retorna 404 (no encontrado)
    if (!deletedPlan)
      return res.status(404).json({ message: "Plan no encontrado" });

    // Si se elimina correctamente, responde con mensaje de éxito
    res.status(200).json({ message: "Plan eliminado correctamente" });
  } catch (error) {
    // Si ocurre un error, responde con código 500 (error del servidor)
    res.status(500).json({ message: "Error al eliminar el plan", error });
  }
};

module.exports = deletePlan;
