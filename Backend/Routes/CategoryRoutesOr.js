const express = require("express");
const recyclablerouter = express.Router();

//insert Model
const Recyclable = require("../Model/CategoryModelOr");

//insert category Controller
const RecyclableController = require("../Controllers/CategoryControllersOr");

recyclablerouter.get("/",RecyclableController.getAllRecyclable);
recyclablerouter.post("/",RecyclableController.addRecyclable);
recyclablerouter.get("/:id",RecyclableController.getRecyclableById);
recyclablerouter.put("/:id",RecyclableController.updateRecyclable);
recyclablerouter.delete("/:id",RecyclableController.deleteRecyclable);


//export
module.exports = recyclablerouter;