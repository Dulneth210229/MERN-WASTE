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
const { loginAdmin } = require("./ErrorHandler/Loginhandler");
const userRouter = require("./Routes/userRoute");
const adminRouter = require("./Routes/adminRoute");
const driverRouter = require("./Routes/driverRoute");
const binRouter = require("./Routes/binRoute");

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
app.post("/loginAdmin", loginAdmin);
app.use("/files", express.static("files"));
app.use("/users", userRouter);
app.use("/drivers", driverRouter);
app.use("/bins", binRouter);
app.use("/admins", adminRouter);

mongoose
  .connect("mongodb+srv://mern:mern@cluster0.icy1i.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .then(() => {
    app.listen(5001, () => console.log("Server is running on port 5001"));
  })
  .catch((err) => console.log(err));

//Pdf_________
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./file");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

//Insert Model part
require("./Model/PdfModel");
const pdfSchema = mongoose.model("PdfDetails");
const upload = multer({ storage });

app.post("/uploadfile", upload.single("file"), async (req, res) => {
  console.log(res.file);
  const title = req.body.title;
  const pdf = req.file.filename;
  try {
    await pdfSchema.create({ title: title, pdf: pdf });
    console.log("File uploaded successfully");
    res.send({ status: 200 });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error" });
  }
});

app.get("/getFile", async (req, res) => {
  try {
    const data = await pdfSchema.find({});
    res.send({ status: 200, data: data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error" });
  }
});
