const express = require("express");
const cors = require("cors");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");
const app = express();
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
// Test route
app.get("/", (req, res) => {
  res.json({
    message: "E-Commerce API is running 🚀",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});