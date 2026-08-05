const wishlistModel = require("../models/wishlistModel");

// GET /api/wishlist - full product details for the logged-in user's wishlist
const getMyWishlist = async (req, res) => {
  try {
    const items = await wishlistModel.getWishlistByUser(req.user.id);

    res.json(items);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// GET /api/wishlist/ids - lightweight list of wishlisted product IDs
const getMyWishlistIds = async (req, res) => {
  try {
    const ids = await wishlistModel.getWishlistProductIds(req.user.id);

    res.json(ids);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// POST /api/wishlist/:productId
const addToWishlist = async (req, res) => {
  try {
    const item = await wishlistModel.addToWishlist(
      req.user.id,
      req.params.productId
    );

    res.status(201).json(item || { message: "Already in wishlist" });
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// DELETE /api/wishlist/:productId
const removeFromWishlist = async (req, res) => {
  try {
    const item = await wishlistModel.removeFromWishlist(
      req.user.id,
      req.params.productId
    );

    if (!item) {
      return res.status(404).json({
        message: "Item not found in wishlist",
      });
    }

    res.json({
      message: "Removed from wishlist",
    });
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  getMyWishlist,
  getMyWishlistIds,
  addToWishlist,
  removeFromWishlist,
};
