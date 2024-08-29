const express = require("express");
const inventoryrouter = express.Router();
//Install model
const Inventory = require("../Model/InventoryModel");
//Insert Inventory Controller
const InventoryController = require("../Controllers/InventoryControll");

//creatr routes path
inventoryrouter.get("/", InventoryController.getInventory);

//export
module.exports = inventoryrouter;
