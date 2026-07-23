const pool = require("../config/db");

// Get all products
const getAllProducts = async () => {
  const result = await pool.query(
    "SELECT * FROM products ORDER BY id ASC"
  );

  return result.rows;
};


// Get single product by ID
const getProductById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM products WHERE id = $1",
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
  deleteProduct,
};