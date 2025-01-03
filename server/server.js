// Importing the express module
const express = require("express");

// Creating an instance of the express app
const app = express();

// Set the port (can be changed if needed)
const PORT = 3000;

// Basic logging message
console.log("Starting server...");

// Middleware to handle JSON requests
app.use(express.json());


app.get("/", (req, res) => {
  res.send("This is the response from the Express server!");
});

// Route: Signup data submission (for testing POST requests)
app.post("/signup", (req, res) => {
  console.log("Received signup data:", req.body); // Log submitted data
  res
    .status(201)
    .json({ message: "Data received successfully", data: req.body });
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
