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

const {
  getReviews,
  addReview,
  removeReview,
} = require("../controllers/reviewController");

// GET all products
router.get("/", getProducts);

// GET single product
router.get("/:id", getProduct);

// GET reviews for a product
router.get("/:id/reviews", getReviews);

// POST a review (logged-in users only)
router.post("/:id/reviews", protect, addReview);

// DELETE your own review
router.delete("/:id/reviews", protect, removeReview);

// CREATE product (Admin only)
router.post("/", protect, admin, addProduct);

// UPDATE product (Admin only)
router.put("/:id", protect, admin, updateProduct);

// DELETE product (Admin only)
router.delete("/:id", protect, admin, removeProduct);

module.exports = router;