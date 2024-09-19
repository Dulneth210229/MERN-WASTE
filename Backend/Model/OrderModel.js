const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  productName: {
    type: String, //data type
    required: true, //validate
  },
  productCategory: {
    type: String,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
  deliveryType: {
    type: String,
    required: true,
  },
  trakingID: {
    type: String,
    required: true,
    unique: true,
  },
  orderDescription: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  orderTotal: {
    type: Number,
    required: true,
  },
  paymentType: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "OrderModel", // file name
  orderSchema //function name
);
