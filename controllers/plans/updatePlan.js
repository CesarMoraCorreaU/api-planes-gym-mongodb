const Plan = require("../../models/Plan"); // Importa el modelo 'Plan'

// Función para actualizar un plan por su ID
const updatePlan = async (req, res) => {
  try {
    // Busca el plan por su ID y lo actualiza con los datos recibidos (req.body)
    // La opción { new: true } indica que se devuelva el documento actualizado
    const updatedPlan = await Plan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // Si no se encuentra el plan, devuelve 404
    if (!updatedPlan)
      return res.status(404).json({ message: "Plan no encontrado" });

    // Devuelve el plan actualizado
    res.status(200).json(updatedPlan);
  } catch (error) {
    // Si ocurre un error, responde con código 400 (petición incorrecta)
    res.status(400).json({ message: "Error al actualizar el plan", error });
  }
};

module.exports = updatePlan;
