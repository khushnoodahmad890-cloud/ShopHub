const pool = require("../config/db");

// Get all reviews for a product, newest first, with reviewer name
const getReviewsByProduct = async (productId) => {
  const result = await pool.query(
    `
    SELECT
      r.id,
      r.user_id,
      r.rating,
      r.comment,
      r.created_at,
      u.name AS user_name
    FROM reviews r
    JOIN users u ON u.id = r.user_id
    WHERE r.product_id = $1
    ORDER BY r.created_at DESC
    `,
    [productId]
  );

  return result.rows;
};

// Aggregate rating summary for a product
const getRatingSummary = async (productId) => {
  const result = await pool.query(
    `
    SELECT
      COUNT(*)::int AS review_count,
      COALESCE(AVG(rating), 0)::float AS average_rating
    FROM reviews
    WHERE product_id = $1
    `,
    [productId]
  );

  return result.rows[0];
};

const getReviewByUserAndProduct = async (productId, userId) => {
  const result = await pool.query(
    "SELECT * FROM reviews WHERE product_id = $1 AND user_id = $2",
    [productId, userId]
  );

  return result.rows[0];
};

const createReview = async (productId, userId, rating, comment) => {
  const result = await pool.query(
    `
    INSERT INTO reviews (product_id, user_id, rating, comment)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [productId, userId, rating, comment || null]
  );

  return result.rows[0];
};

const deleteReview = async (productId, userId) => {
  const result = await pool.query(
    `
    DELETE FROM reviews
    WHERE product_id = $1 AND user_id = $2
    RETURNING *
    `,
    [productId, userId]
  );

  return result.rows[0];
};

module.exports = {
  getReviewsByProduct,
  getRatingSummary,
  getReviewByUserAndProduct,
  createReview,
  deleteReview,
};
