const express = require("express");
const userRouter = express.Router();
//Insert Model
const User = require("../Model/userModel")
//Insert User controller
const UserController = require("../Controllers/userControllers")

userRouter.get("/",UserController.getAllUsers);
userRouter.post("/",UserController.addUsers);
userRouter.get("/:uid",UserController.getById);
userRouter.put("/:uid",UserController.updateUser);
userRouter.delete("/:uid",UserController.deleteUser);




//export
module.exports = userRouter;