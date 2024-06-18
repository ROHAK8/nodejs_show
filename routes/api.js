// routes/api.js
const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

// Sample route
router.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Get all data
router.get("/data", apiController.getAllData);

// Add new data
router.post("/data", apiController.addData);

// Get data by ID
router.get("/data/:id", apiController.getDataById);

module.exports = router;
