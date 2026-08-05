const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  getMyWishlist,
  getMyWishlistIds,
  addToWishlist,
  removeFromWishlist,
} = require("../controllers/wishlistController");

// Get full wishlist (with product details)
router.get("/", protect, getMyWishlist);

// Get just the wishlisted product IDs (for lightweight UI state)
router.get("/ids", protect, getMyWishlistIds);

// Add a product to the wishlist
router.post("/:productId", protect, addToWishlist);

// Remove a product from the wishlist
router.delete("/:productId", protect, removeFromWishlist);

module.exports = router;
