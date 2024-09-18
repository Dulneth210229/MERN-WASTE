const express = require("express");
const binRouter = express.Router();
//Insert Model
const Bin = require("../Model/binModel")
//Insert User controller
const BinController = require("../Controllers/binControllers")

binRouter.get("/",BinController.getAllBins);
binRouter.post("/",BinController.addBins);
binRouter.get("/:bid",BinController.getById);
binRouter.put("/:bid",BinController.updateBin);
binRouter.delete("/:bid",BinController.deleteBin);




//export
module.exports = binRouter;