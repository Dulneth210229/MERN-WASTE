const express= require("express");
const paymentplanrouter = express.Router();

// inserter models
const PaymentPlan = require("../Model/PaymentPlanModel");

// insert user controller
const PaymentPlanController = require("../Controllers/PaymentPlanControllers");

paymentplanrouter.get("/",PaymentPlanController.getAllPaymentPlans);
paymentplanrouter.post("/",PaymentPlanController.addPaymentPlans);
paymentplanrouter.get("/:id",PaymentPlanController.getPaymentPlanById);
paymentplanrouter.put("/:id",PaymentPlanController.updatePaymentPlan);
paymentplanrouter.delete("/:id",PaymentPlanController.delectPaymentPlan);



//export
module.exports =paymentplanrouter;