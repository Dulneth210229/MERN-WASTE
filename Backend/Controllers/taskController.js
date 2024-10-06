const Task = require("../Model/taskModel");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate("driverId").populate("binIds");
        res.status(200).json({ tasks });
    } catch (err) {
        res.status(500).json({ message: "Error fetching tasks", error: err.message });
    }
};

const addTask = async (req, res) => {
    const { driverId, binIds, taskId, duration } = req.body;

    try {
        const task = new Task({ driverId, binIds, taskId, duration });
        await task.save();
        res.status(201).json({ message: "Task added successfully", task });
    } catch (err) {
        res.status(500).json({ message: "Error adding task", error: err.message });
    }
};

const updateTaskStatus = async (req, res) => {
    const { taskId } = req.params;
    const { completionStatus } = req.body;

    try {
        const task = await Task.findByIdAndUpdate(taskId, { completionStatus }, { new: true });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json({ message: "Task status updated", task });
    } catch (err) {
        res.status(500).json({ message: "Error updating task status", error: err.message });
    }
};

const getTaskById = async (req, res) => {
    const { taskId } = req.params;

    try {
        const task = await Task.findById(taskId).populate("driverId").populate("binIds");
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json({ task });
    } catch (err) {
        res.status(500).json({ message: "Error fetching task", error: err.message });
    }
};

const deleteTask = async (req, res) => {
    const { taskId } = req.params;

    try {
        const task = await Task.findByIdAndDelete(taskId);
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json({ message: "Task deleted successfully", task });
    } catch (err) {
        res.status(500).json({ message: "Error deleting task", error: err.message });
    }
};

module.exports = {
    getAllTasks,
    addTask,
    updateTaskStatus,
    getTaskById,
    deleteTask
};
