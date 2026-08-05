const pool = require("../config/db");

// Get all wishlist items for a user, joined with product data
const getWishlistByUser = async (userId) => {
  const result = await pool.query(
    `
    SELECT
      p.*,
      w.created_at AS wishlisted_at
    FROM wishlist_items w
    JOIN products p ON p.id = w.product_id
    WHERE w.user_id = $1
    ORDER BY w.created_at DESC
    `,
    [userId]
  );

  return result.rows;
};

// Get just the product IDs a user has wishlisted (cheap check for UI state)
const getWishlistProductIds = async (userId) => {
  const result = await pool.query(
    "SELECT product_id FROM wishlist_items WHERE user_id = $1",
    [userId]
  );

  return result.rows.map((row) => row.product_id);
};

const addToWishlist = async (userId, productId) => {
  const result = await pool.query(
    `
    INSERT INTO wishlist_items (user_id, product_id)
    VALUES ($1, $2)
    ON CONFLICT (user_id, product_id) DO NOTHING
    RETURNING *
    `,
    [userId, productId]
  );

  return result.rows[0];
};

const removeFromWishlist = async (userId, productId) => {
  const result = await pool.query(
    `
    DELETE FROM wishlist_items
    WHERE user_id = $1 AND product_id = $2
    RETURNING *
    `,
    [userId, productId]
  );

  return result.rows[0];
};

module.exports = {
  getWishlistByUser,
  getWishlistProductIds,
  addToWishlist,
  removeFromWishlist,
};
