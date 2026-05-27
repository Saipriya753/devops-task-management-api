require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");
const client = require("prom-client");

const PORT = process.env.PORT || 3000;

// Create a Registry
const register = new client.Registry();

// Collect default metrics
client.collectDefaultMetrics({ register });

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

// Metrics endpoint for Prometheus
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/health`);
      console.log(`Metrics: http://localhost:${PORT}/metrics`);
    });
  })
  .catch((err) => {
    console.log(err);
  });