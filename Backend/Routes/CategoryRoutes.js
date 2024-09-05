const express = require("express");
const categoryrouter = express.Router();

//insert Model
const Category = require("../Model/CategoryModel");

//insert category Controller
const CategoryController = require("../Controllers/CategoryControllers");

categoryrouter.get("/",CategoryController.getAllCategory);
categoryrouter.post("/",CategoryController.addCategory);
categoryrouter.get("/:id",CategoryController.getCategoryById);
categoryrouter.put("/:id",CategoryController.updateCategory);
categoryrouter.delete("/:id",CategoryController.deleteCategory);


//export
module.exports = categoryrouter;