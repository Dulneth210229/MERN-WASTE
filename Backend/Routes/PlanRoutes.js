const express= require("express");
const planrouter = express.Router();

// inserter models
const Plan = require("../Model/PlanModel");

// insert user controller
const PlanController = require("../Controllers/PlanControllers");

planrouter.get("/",PlanController.getAllPlans);
planrouter.post("/add",PlanController.addPlans);
planrouter.get("/:id",PlanController.getPlanById);
planrouter.put("/:id",PlanController.updatePlan);
planrouter.delete("/:id",PlanController.delectPlan);



//export
module.exports =planrouter;