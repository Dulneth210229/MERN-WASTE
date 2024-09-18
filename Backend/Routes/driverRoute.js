const express = require("express");
const driverRouter = express.Router();
//Insert Model
const Driver = require("../Model/driverModel")
//Insert User controller
const DriverController = require("../Controllers/driverControllers")

driverRouter.get("/",DriverController.getAllDrivers);
driverRouter.post("/",DriverController.addDrivers);
driverRouter.get("/:did",DriverController.getById);
driverRouter.put("/:did",DriverController.updateDriver);
driverRouter.delete("/:did",DriverController.deleteDriver);


//export
module.exports = driverRouter;