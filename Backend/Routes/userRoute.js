const express = require("express");
const userRouter = express.Router();

// Insert User controller
const UserController = require("../Controllers/userControllers");

userRouter.get("/", UserController.getAllUsers);        // Get all users
userRouter.post("/", UserController.addUsers);          // Add a new user
userRouter.get("/:uid", UserController.getById);        // Get a user by ID
userRouter.put("/:uid", UserController.updateUser);     // Update a user by ID
userRouter.delete("/:uid", UserController.deleteUser);  // Delete a user by ID

// Handle login
userRouter.post("/login", UserController.loginUser);    // Login route

// Export
module.exports = userRouter;
