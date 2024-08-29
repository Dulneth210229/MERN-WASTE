const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestServiceSchema = new Schema({
    service: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model(
    "RequestServiceModel",    //file name
    requestServiceSchema    //function name
)