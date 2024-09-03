const express = require("express");
const supportRouter = express.Router();

//Install model
const Support = require("../Model/SupportModel");

const SupportController = require("../Controllers/SupportControllers");

//creatr routes path
supportRouter.get("/", SupportController.getAllSupport);
supportRouter.post("/", SupportController.addSupport);
supportRouter.get("/:id", SupportController.getById);
supportRouter.put("/:id", SupportController.updateSupport);
supportRouter.delete("/:id", SupportController.deleteSupport);


//export
module.exports = supportRouter;




