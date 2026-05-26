const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const taskRoutes = require("./routes/taskRoutes");

const authRoutes = require("./routes/authRoutes");

const app = express();

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

app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;