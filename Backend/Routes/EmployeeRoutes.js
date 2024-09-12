const express = require("express");
const employeerouter = express.Router();
//Insert Model
const Employee = require("../Model/EmployeeModel");
//Insert Employee Controller
const EmployeeController = require("../Controllers/EmployeeControllers");

employeerouter.get("/",EmployeeController.getEmployee);
employeerouter.post("/",EmployeeController.addEmployee);
employeerouter.get("/:id",EmployeeController.getById);
employeerouter.put("/:id",EmployeeController.updateEmployee);
employeerouter.delete("/:id",EmployeeController.deleteEmployee);
//export
module.exports = employeerouter;