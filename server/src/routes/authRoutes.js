const express = require("express");

const router = express.Router();

const {
  register,
  login,
  getUserCount,
} = require("../controllers/authController");

// Register
router.post("/register", register);

// Login
router.post("/login", login);
// Get total users
router.get("/users/count", getUserCount);

module.exports = router;