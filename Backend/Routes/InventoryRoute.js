const express = require("express");
const inventoryrouter = express.Router();
//Install model
const Inventory = require("../Model/InventoryModel");
//Insert Inventory Controller
const InventoryController = require("../Controllers/InventoryControll");

//creatr routes path
inventoryrouter.get("/", InventoryController.getInventory);
inventoryrouter.post("/", InventoryController.addInventory);
inventoryrouter.get("/:Iid", InventoryController.getInventoryById);
inventoryrouter.put("/:Iid", InventoryController.updateInventory);
inventoryrouter.delete("/:Iid", InventoryController.deleteInventory);

//export
module.exports = inventoryrouter;
