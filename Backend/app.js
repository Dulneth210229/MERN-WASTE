const express = require("express");
const mongoose = require("mongoose");

const app = express();

//middleware
app.use("/", (req, res, next) => {
  res.send("It is working");
});

mongoose
  .connect("mongodb+srv://mern:mern@cluster0.icy1i.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .then(() => {
    app.listen(5000, () => console.log("Server is running on port 5000"));
  })
  .catch((err) => console.log(err));
