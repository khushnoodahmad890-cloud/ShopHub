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

<<<<<<< HEAD
const {
  getReviews,
  addReview,
  removeReview,
} = require("../controllers/reviewController");

=======
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
// GET all products
router.get("/", getProducts);

// GET single product
router.get("/:id", getProduct);

<<<<<<< HEAD
// GET reviews for a product
router.get("/:id/reviews", getReviews);

// POST a review (logged-in users only)
router.post("/:id/reviews", protect, addReview);

// DELETE your own review
router.delete("/:id/reviews", protect, removeReview);

=======
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
// CREATE product (Admin only)
router.post("/", protect, admin, addProduct);

// UPDATE product (Admin only)
router.put("/:id", protect, admin, updateProduct);

// DELETE product (Admin only)
router.delete("/:id", protect, admin, removeProduct);

module.exports = router;