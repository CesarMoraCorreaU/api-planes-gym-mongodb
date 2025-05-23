const Plan = require("../../models/Plan");

const deletePlan = async (req, res) => {
  try {
    const deletedPlan = await Plan.findByIdAndDelete(req.params.id);
    if (!deletedPlan)
      return res.status(404).json({ message: "Plan no encontrado" });
    res.status(200).json({ message: "Plan eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el plan", error });
  }
};

module.exports = deletePlan;
