const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/InventoryRoute");
const feedbackRouter = require("./Routes/FeedbackRoutes");

const app = express();

//middleware
app.use("/inventory", router);
app.use("/feedback", feedbackRouter);

mongoose
  .connect("mongodb+srv://mern:mern@cluster0.icy1i.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .then(() => {
    app.listen(5001, () => console.log("Server is running on port 5001"));
  })
  .catch((err) => console.log(err));
