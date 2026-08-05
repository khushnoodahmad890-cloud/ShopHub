const express = require("express");
const cors = require("cors");
require("dotenv").config();
<<<<<<< HEAD

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");

const app = express();
=======
const productRoutes = require("./routes/productRoutes");
const app = express();
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
<<<<<<< HEAD

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/wishlist", wishlistRoutes);

=======
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
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