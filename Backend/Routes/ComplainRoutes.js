const express = require("express");
const complainRouter = express.Router();

//Install model
const Complain = require("../Model/ComplainModel");

const ComplainController = require("../Controllers/ComplainControllers");

//creatr routes path
complainRouter.get("/", ComplainController.getAllComplain);
complainRouter.post("/", ComplainController.addComplain);
complainRouter.get("/:id", ComplainController.getById);
complainRouter.put("/:id", ComplainController.updateComplain);
complainRouter.delete("/:id", ComplainController.deleteComplain);


//export
module.exports = complainRouter;




