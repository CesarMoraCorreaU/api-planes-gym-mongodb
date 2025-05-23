const Plan = require("../../models/Plan");

const createPlan = async (req, res) => {
  try {
    const newPlan = new Plan(req.body);
    await newPlan.save();
    res.status(201).json(newPlan);
  } catch (error) {
    res.status(400).json({ message: "Error al crear el plan", error });
  }
};

module.exports = createPlan;
