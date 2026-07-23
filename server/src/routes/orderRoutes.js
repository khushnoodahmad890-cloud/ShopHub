const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

// Create Order
router.post("/", verifyToken, createOrder);

// Get Logged-in User Orders
router.get("/my-orders", verifyToken, getMyOrders);

// Admin: Get All Orders
router.get(
  "/admin",
  verifyToken,
  getAllOrders
);

// Admin: Update Order Status
router.put(
  "/admin/:id",
  verifyToken,
  updateOrderStatus
);

module.exports = router;