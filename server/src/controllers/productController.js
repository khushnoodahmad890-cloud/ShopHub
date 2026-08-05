const productModel = require("../models/productModel");

// GET all products
const getProducts = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();

    res.json(products);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// GET single product
const getProduct = async (req, res) => {
  try {
    const product = await productModel.getProductById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// CREATE product
const addProduct = async (req, res) => {
  try {
    const {
      title,
      price,
      image,
      category,
      description,
      stock,
    } = req.body;

    const product = await productModel.createProduct(
      title,
      price,
      image,
      category,
      description,
      stock
    );

    res.status(201).json(product);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// UPDATE product
const updateProduct = async (req, res) => {
  try {
    const {
      title,
      price,
      image,
      category,
      description,
      stock,
    } = req.body;

    const product = await productModel.updateProduct(
      req.params.id,
      title,
      price,
      image,
      category,
      description,
      stock
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// DELETE product
const removeProduct = async (req, res) => {
  try {
    const product = await productModel.deleteProduct(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json({
      message: "Product deleted",
      product,
    });
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  removeProduct,
};