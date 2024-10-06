const mongoose = require("mongoose"); // Import mongoose
const { Schema } = mongoose; // Destructure Schema from mongoose

// Define the user schema
const driverSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  NID: {
    type: String,
    required: true,
  },
  Dlicense: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Export the model
module.exports = mongoose.model("Driver", driverSchema);
