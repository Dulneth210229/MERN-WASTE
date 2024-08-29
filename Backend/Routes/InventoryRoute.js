const express = require("express");
const router = express.Router();
//Install model
const Inventory = require("../Model/InventoryModel");
//Insert Inventory Controller
const InventoryController = require("../Controllers/InventoryControll");

//creatr routes path
router.get("/", InventoryController.getInventory);

//export
module.exports = router;
