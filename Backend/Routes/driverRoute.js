const express = require("express");
const driverRouter = express.Router();
const DriverController = require("../Controllers/driverControllers");

// Define routes
driverRouter.get("/", DriverController.getAllDrivers);
driverRouter.post("/", DriverController.addDrivers);
driverRouter.get("/:did", DriverController.getById);
driverRouter.put("/:did", DriverController.updateDriver);
driverRouter.delete("/:did", DriverController.deleteDriver);
driverRouter.post("/login", DriverController.loginDriver);

// Export the router
module.exports = driverRouter;
