const Plan = require("../../models/Plan");

const updatePlan = async (req, res) => {
  try {
    const updatedPlan = await Plan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedPlan)
      return res.status(404).json({ message: "Plan no encontrado" });
    res.status(200).json(updatedPlan);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el plan", error });
  }
};

module.exports = updatePlan;
