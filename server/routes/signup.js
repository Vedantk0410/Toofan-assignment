const express = require("express");
const router = express.Router();

// POST route to handle signup
router.post("/", (req, res) => {
  const { email, password, rememberMe } = req.body;
  console.log("Received Signup Data:", { email, password, rememberMe });

  // Simulate saving data to a database
  res.status(201).json({
    message: "User signup data received successfully",
    data: { email, password, rememberMe },
  });
});

module.exports = router;
