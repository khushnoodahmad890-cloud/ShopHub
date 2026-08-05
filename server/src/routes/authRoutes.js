const express = require("express");

const router = express.Router();

const { protect, admin } = require("../middleware/authMiddleware");

const {
  register,
  login,
  getUserCount,
} = require("../controllers/authController");

// Register
router.post("/register", register);

// Login
router.post("/login", login);
// Get total users (Admin only)
router.get("/users/count", protect, admin, getUserCount);

module.exports = router;