const pool = require("../config/db");

// Get all products
const getAllProducts = async () => {
  const result = await pool.query(
    `
    SELECT
      p.*,
      COALESCE(AVG(r.rating), 0)::float AS average_rating,
      COUNT(r.id)::int AS review_count
    FROM products p
    LEFT JOIN reviews r ON r.product_id = p.id
    GROUP BY p.id
    ORDER BY p.id ASC
    `
  );

  return result.rows;
};


// Get single product by ID
const getProductById = async (id) => {
  const result = await pool.query(
    `
    SELECT
      p.*,
      COALESCE(AVG(r.rating), 0)::float AS average_rating,
      COUNT(r.id)::int AS review_count
    FROM products p
    LEFT JOIN reviews r ON r.product_id = p.id
    WHERE p.id = $1
    GROUP BY p.id
    `,
    [id]
  );

  return result.rows[0];
};


// Create product
const createProduct = async (
  title,
  price,
  image,
  category,
  description,
  stock
) => {
  const result = await pool.query(
    `
    INSERT INTO products 
    (title, price, image, category, description, stock)
    VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING *
    `,
    [
      title,
      price,
      image,
      category,
      description,
      stock,
    ]
  );

  return result.rows[0];
};


// Update product
const updateProduct = async (
  id,
  title,
  price,
  image,
  category,
  description,
  stock
) => {
  const result = await pool.query(
    `
    UPDATE products
    SET
      title = $1,
      price = $2,
      image = $3,
      category = $4,
      description = $5,
      stock = $6
    WHERE id = $7
    RETURNING *
    `,
    [title, price, image, category, description, stock, id]
  );

  return result.rows[0];
};


// Delete product
const deleteProduct = async (id) => {
  const result = await pool.query(
    "DELETE FROM products WHERE id = $1 RETURNING *",
    [id]
  );

  return result.rows[0];
};


module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};