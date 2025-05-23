const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const planRoutes = require("./routes/planRoutes");

dotenv.config();

const app = express();
app.use(express.json());

// Conexión a base de datos
connectDB();

// Rutas
app.use("/plans", planRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
