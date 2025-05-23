const Plan = require("../../models/Plan");

const getPlanById = async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id);
    if (!plan) return res.status(404).json({ message: "Plan no encontrado" });
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar el plan", error });
  }
};

module.exports = getPlanById;
