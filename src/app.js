const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const client = require("prom-client");

const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Collect default metrics
client.collectDefaultMetrics();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Task Management API Running");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK"
  });
});

// Metrics endpoint
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;