const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name: {
        type: String,
        required: true, // validate
    },
    email: {
        type: String,
        required: true, // validate
    },
    password: {
        type: String,
        required: true, // validate
    }
});

// Export the model
module.exports = mongoose.model(
    "adminModel", // Model name
    adminSchema // Schema name
);
