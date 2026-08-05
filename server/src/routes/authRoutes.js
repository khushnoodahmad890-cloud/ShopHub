const express = require("express");

const router = express.Router();

<<<<<<< HEAD
const { protect, admin } = require("../middleware/authMiddleware");

=======
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
const {
  register,
  login,
  getUserCount,
} = require("../controllers/authController");

// Register
router.post("/register", register);

// Login
router.post("/login", login);
<<<<<<< HEAD
// Get total users (Admin only)
router.get("/users/count", protect, admin, getUserCount);
=======
// Get total users
router.get("/users/count", getUserCount);
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432

module.exports = router;