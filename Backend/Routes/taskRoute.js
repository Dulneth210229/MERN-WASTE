const express = require("express");
const {
    getAllTasks,
    addTask,
    updateTaskStatus,
    getTaskById,
    deleteTask
} = require("../Controllers/taskController");

const router = express.Router();

// Route to get all tasks
router.get("/tasks", getAllTasks);

// Route to create a new task
router.post("/tasks", addTask);

// Route to update task completion status
router.patch("/tasks/:taskId", updateTaskStatus);

// Route to get a task by ID
router.get("/tasks/:taskId", getTaskById);

// Route to delete a task by ID
router.delete("/tasks/:taskId", deleteTask);

module.exports = taskrouter;
