const Plan = require("../../models/Plan");

const getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los planes", error });
  }
};

module.exports = getAllPlans;
