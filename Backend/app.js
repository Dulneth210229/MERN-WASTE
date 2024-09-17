const express = require("express");
const mongoose = require("mongoose");
const inventoryrouter = require("./Routes/InventoryRoute");
const requestRouter = require("./Routes/RequestRoute");
const paymentplanrouter = require("./Routes/PaymentPlanRoute");
const categoryrouter = require("./Routes/CategoryRoutes");
const feedbackRouter = require("./Routes/FeedbackRoutes");
const accountrouter = require("./Routes/AccountRoutes");
const supportRouter = require("./Routes/SupportRoutes");
const complainRouter = require("./Routes/ComplainRoutes");
const inventoryRegisterUser = require("./ErrorHandler/InventoryregisterHandler");

const dotenv = require("dotenv");

dotenv.config();
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/request", requestRouter);
app.use("/inventory", inventoryrouter);
app.use("/paymentplan", paymentplanrouter);
app.use("/feedback", feedbackRouter);
app.use("/category", categoryrouter);
app.use("/category", categoryrouter);
app.use("/account", accountrouter);
app.use("/category", categoryrouter);
app.use("/account", accountrouter);
app.use("/support", supportRouter);
app.use("/complain", complainRouter);
app.post("/register", inventoryRegisterUser);

mongoose
  .connect("mongodb+srv://mern:mern@cluster0.icy1i.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .then(() => {
    app.listen(5001, () => console.log("Server is running on port 5001"));
  })
  .catch((err) => console.log(err));

// //call register model
// require("./Model/InventoryRegister");
// const User = mongoose.model("InventoryRegister");
// app.post("/register", async (req, res) => {
//   const { fname, sname, email, password } = req.body;
//   try {
//     await User.create({ fname, sname, email, password });
//     res.send({ status: "ok" });
//   } catch (err) {
//     res.send({ status: "error" });
//   }
// });
