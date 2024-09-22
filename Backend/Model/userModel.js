const mongoose = require("mongoose");  // Import mongoose
const { Schema } = mongoose;           // Destructure Schema from mongoose

// Define the user schema
const userSchema = new Schema({
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
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,  // Assuming you're including password in the user model
  },
});

// Export the model
module.exports = mongoose.model("User", userSchema);
