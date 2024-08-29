const express = require("express");
const feedbackRouter = express.Router();

//Install model
const Feedback = require("../Model/FeedbackModel");

const FeedbackController = require("../Controllers/FeedbackControllers");

//creatr routes path
feedbackRouter.get("/", FeedbackController.getAllFeedback);

//export
module.exports = feedbackRouter;




