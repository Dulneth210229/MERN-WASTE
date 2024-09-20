const express = require("express");
const categoryrouterHza = express.Router();

//insert Model
const Category = require("../Model/CategoryModelHza");

//insert category Controller
const CategoryControllerHza = require("../Controllers/CategoryControllersHza");

categoryrouterHza.get("/",CategoryControllerHza.getAllCategory);
categoryrouterHza.post("/",CategoryControllerHza.addCategory);
categoryrouterHza.get("/:id",CategoryControllerHza.getCategoryById);
categoryrouterHza.put("/:id",CategoryControllerHza.updateCategory);
categoryrouterHza.delete("/:id",CategoryControllerHza.deleteCategory);


//export
module.exports = categoryrouterHza;