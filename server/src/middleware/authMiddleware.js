const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log("Authorization Header:", authHeader);
  console.log("JWT Secret:", process.env.JWT_SECRET);

  if (!authHeader) {
    return res.status(401).json({
      message: "Access denied. No token provided.",
    });
  }

  const token = authHeader.split(" ")[1];

  console.log("Token:", token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded:", decoded);

    req.user = decoded;

    next();
  } catch (error) {
    console.error("JWT Error:", error);

    return res.status(401).json({
      message: "Invalid or expired token.",
      error: error.message,
    });
  }
};

module.exports = verifyToken;