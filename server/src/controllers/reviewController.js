const reviewModel = require("../models/reviewModel");

// GET /api/products/:id/reviews
const getReviews = async (req, res) => {
  try {
    const productId = req.params.id;

    const [reviews, summary] = await Promise.all([
      reviewModel.getReviewsByProduct(productId),
      reviewModel.getRatingSummary(productId),
    ]);

    res.json({
      reviews,
      averageRating: Number(summary.average_rating),
      reviewCount: summary.review_count,
    });
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// POST /api/products/:id/reviews (Protected — one review per user per product)
const addReview = async (req, res) => {
  try {
    const productId = req.params.id;
    const { rating, comment } = req.body;

    const numericRating = Number(rating);

    if (!numericRating || numericRating < 1 || numericRating > 5) {
      return res.status(400).json({
        message: "Rating must be between 1 and 5",
      });
    }

    const existing = await reviewModel.getReviewByUserAndProduct(
      productId,
      req.user.id
    );

    if (existing) {
      return res.status(400).json({
        message: "You've already reviewed this product",
      });
    }

    const review = await reviewModel.createReview(
      productId,
      req.user.id,
      numericRating,
      comment
    );

    res.status(201).json(review);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// DELETE /api/products/:id/reviews (Protected — remove your own review)
const removeReview = async (req, res) => {
  try {
    const productId = req.params.id;

    const deleted = await reviewModel.deleteReview(productId, req.user.id);

    if (!deleted) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.json({
      message: "Review deleted",
    });
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  getReviews,
  addReview,
  removeReview,
};
