const express = require("express");
const mongoose = require("mongoose");
const inventoryrouter = require("./Routes/InventoryRoute");
const requestRouter = require("./Routes/RequestRoute");
<<<<<<< HEAD
const paymentplanrouter=require("./Routes/PaymentPlanRoute");


=======
const feedbackRouter = require("./Routes/FeedbackRoutes");
>>>>>>> main

const app = express();

//middleware
app.use(express.json());
app.use("/request", requestRouter);
app.use("/inventory", inventoryrouter);
<<<<<<< HEAD
app.use("/paymentplan",paymentplanrouter);
=======
app.use("/feedback", feedbackRouter);
>>>>>>> main


mongoose
  .connect("mongodb+srv://mern:mern@cluster0.icy1i.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .then(() => {
    app.listen(5001, () => console.log("Server is running on port 5001"));
  })
  .catch((err) => console.log(err));
