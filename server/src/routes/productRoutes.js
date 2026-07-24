const express = require("express");

const router = express.Router();

const { protect, admin } = require("../middleware/authMiddleware");

const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  removeProduct,
} = require("../controllers/productController");

// GET all products
router.get("/", getProducts);

// GET single product
router.get("/:id", getProduct);

// CREATE product (Admin only)
router.post("/", protect, admin, addProduct);

// UPDATE product (Admin only)
router.put("/:id", protect, admin, updateProduct);

// DELETE product (Admin only)
router.delete("/:id", protect, admin, removeProduct);

module.exports = router;