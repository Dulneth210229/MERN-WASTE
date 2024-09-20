const express = require("express");
const categoryrouterOr = express.Router();

//insert Model
const Category = require("../Model/CategoryModelOr");

//insert category Controller
const CategoryControllerOr = require("../Controllers/CategoryControllersOr");

categoryrouterOr.get("/",CategoryControllerOr.getAllCategory);
categoryrouterOr.post("/",CategoryControllerOr.addCategory);
categoryrouterOr.get("/:id",CategoryControllerOr.getCategoryById);
categoryrouterOr.put("/:id",CategoryControllerOr.updateCategory);
categoryrouterOr.delete("/:id",CategoryControllerOr.deleteCategory);


//export
module.exports = categoryrouterOr;