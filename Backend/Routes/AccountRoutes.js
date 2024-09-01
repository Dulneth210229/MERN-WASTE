const express= require("express");
const accountrouter = express.Router();

// inserter models
const Account = require("../Model/AccountModel");

//Insert Account controller
const AccountControllers = require("../Controllers/AccountControllers");

//creatr routes path
accountrouter.get("/",AccountControllers.getAllAccount);
accountrouter.post("/",AccountControllers.addAccount);
accountrouter.get("/:id",AccountControllers.getAccountById);
accountrouter.put("/:id",AccountControllers.updateAccount);
accountrouter.delete("/:id",AccountControllers.deleteAccount);




//export
module.exports= accountrouter;


