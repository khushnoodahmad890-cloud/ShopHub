const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  getProducts,
  getProduct,
  addProduct,
  removeProduct,
} = require("../controllers/productController");


// GET all products
router.get("/", getProducts);


// GET single product
router.get("/:id", getProduct);


// CREATE product
router.post("/", verifyToken, addProduct);


// DELETE product
router.delete("/:id", verifyToken, removeProduct);


module.exports = router;