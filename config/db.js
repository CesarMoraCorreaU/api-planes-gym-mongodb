const mongoose = require("mongoose"); // Importa mongoose

// Función para conectar a MongoDB
const connectDB = async () => {
  try {
    // Intenta conectar usando la URI definida en las variables de entorno
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Conectado a MongoDB Atlas");
  } catch (error) {
    // Si ocurre un error al conectar, se muestra el mensaje y se termina el proceso
    console.error("❌ Error al conectar a MongoDB", error.message);
    process.exit(1);
  }
};

module.exports = connectDB; // Exporta la función de conexión
