const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentPlanSchema = new Schema({
  packageName: {
    type: String, // Name of the package
    required: true, // This is a required field
  },
  packagePrice: {
    type: Number, // Price of the package
    required: true, // This is a required field
  },
  cardHolderName: {
    type: String, // Name of the card holder
    required: true, // This is a required field
  },
  paymentSuccessTime: {
    type: Date, // Time of successful payment
    default: Date.now, // Automatically records the time of the payment
  },
});

module.exports = mongoose.model("PaymentPlan", paymentPlanSchema);
