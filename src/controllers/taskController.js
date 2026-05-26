const Task = require("../models/Task");


// CREATE TASK
exports.createTask = async (req, res) => {

  try {

    const task = await Task.create({
      ...req.body,
      user: req.user.id
    });

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


// GET ALL TASKS
exports.getTasks = async (req, res) => {

  try {

    const tasks = await Task.find({
      user: req.user.id
    });

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


// UPDATE TASK
exports.updateTask = async (req, res) => {

  try {

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );

    res.status(200).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


// DELETE TASK
exports.deleteTask = async (req, res) => {

  try {

    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Task deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};