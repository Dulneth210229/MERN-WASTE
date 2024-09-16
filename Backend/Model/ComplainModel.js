const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const complainSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    complainCategory: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    attachements: {
        type: String,
        required: true,
    },
     
});

module.exports = mongoose.model(
    "ComplainModel",
    complainSchema
)