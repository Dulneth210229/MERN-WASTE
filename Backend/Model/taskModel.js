const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver", // Reference to the Driver model
        required: true,
    },
    binIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bin", // Reference to the Bin model
        required: true,
    }],
    taskId: {
        type: String,
        required: true,
        unique: true,
    },
    completionStatus: {
        type: Boolean,
        default: false, // Initially set to false
    },
    duration: {
        type: Number, // Duration can be in minutes or hours
        required: true,
    },
});

module.exports = mongoose.model("Task", taskSchema);
