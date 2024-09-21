const express = require("express");
const hazardousrouter = express.Router();

//insert Model
const Hazardous = require("../Model/CategoryModelsHza");

//insert category Controller
const HazardousController = require("../Controllers/CategoryControllersHza");

hazardousrouter.get("/",HazardousController.getAllHazardous);
hazardousrouter.post("/",HazardousController.addHazardous);
hazardousrouter.get("/:id",HazardousController.getHazardousById);
hazardousrouter.put("/:id",HazardousController.updateHazardous);
hazardousrouter.delete("/:id",HazardousController.deleteHazardous);


//export
module.exports = hazardousrouter;