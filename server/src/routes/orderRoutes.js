const express = require("express");

const router = express.Router();

const { protect, admin } = require("../middleware/authMiddleware");

const {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

// Create Order
router.post("/", protect, createOrder);

// Get Logged-in User Orders
router.get("/my-orders", protect, getMyOrders);

// Admin: Get All Orders
router.get("/admin", protect, admin, getAllOrders);

// Admin: Update Order Status
router.put("/admin/:id", protect, admin, updateOrderStatus);

module.exports = router;