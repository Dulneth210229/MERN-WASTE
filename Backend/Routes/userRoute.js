const express = require("express");
const userRouter = express.Router();
// Insert User controller
const UserController = require("../Controllers/userControllers");

userRouter.get("/", UserController.getAllUsers);
userRouter.post("/", UserController.addUsers);
userRouter.get("/:uid", UserController.getById);
userRouter.post("/login", UserController.loginUser);
userRouter.put("/:uid", UserController.updateUser);
userRouter.delete("/:uid", UserController.deleteUser);

// Export
module.exports = userRouter;
