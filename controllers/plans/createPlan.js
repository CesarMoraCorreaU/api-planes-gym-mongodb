const Plan = require("../../models/Plan"); // Importa el modelo de datos 'Plan'

// Función para crear un nuevo plan
const createPlan = async (req, res) => {
  try {
    // Crea una nueva instancia de Plan usando los datos enviados en el cuerpo del request (req.body)
    const newPlan = new Plan(req.body);

    // Guarda el nuevo plan en la base de datos
    await newPlan.save();

    // Devuelve el plan creado con un código 201 (creado)
    res.status(201).json(newPlan);
  } catch (error) {
    // Si ocurre un error, devuelve un mensaje de error y el detalle
    res.status(400).json({ message: "Error al crear el plan", error });
  }
};

module.exports = createPlan; // Exporta la función para su uso en las rutas
