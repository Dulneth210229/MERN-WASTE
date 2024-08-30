const express = require("express");
const categoryrouter = express.Router();

//insert Model
const Category = require("../Model/CategoryModel");

//insert category Controller
const CategoryController = require("../Controllers/CategoryControllers");

categoryrouter.get("/",CategoryController.getAllCategory);
categoryrouter.post("/",CategoryController.addCategory);

//export
module.exports = categoryrouter;