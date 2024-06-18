const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// Start server
const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = { app, server }; // Export both app and server for testing purposes
