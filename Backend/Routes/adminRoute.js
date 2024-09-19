const express = require("express");
const adminRouter = express.Router();
//Insert Model
const Admin = require("../Model/adminModel")
//Insert User controller
const AdminController = require("../Controllers/adminControllers")

adminRouter.get("/",AdminController.getAllAdmins);
adminRouter.post("/",AdminController.addAdmins);
adminRouter.get("/:aid",AdminController.getById);
adminRouter.put("/:aid",AdminController.updateAdmin);
adminRouter.delete("/:aid",AdminController.deleteAdmin);

//export
module.exports = adminRouter;