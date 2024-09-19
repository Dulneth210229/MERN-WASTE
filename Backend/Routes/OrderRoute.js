const express = require("express");
const orderrouter = express.Router();
//Install model
const Order = require("../Model/OrderModel");
//Insert Inventory Controller
const orderController = require("../Controllers/orderController");

//creatr routes path
orderrouter.get("/", orderController.getOrder);
orderrouter.post("/", orderController.addOrder);
orderrouter.get("/:Oid", orderController.getOrderById);
orderrouter.put("/:Oid", orderController.updateOrder);
orderrouter.delete("/:Oid", orderController.deleteOrder);

//export
module.exports = orderrouter;
