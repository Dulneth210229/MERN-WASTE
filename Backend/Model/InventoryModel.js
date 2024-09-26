const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  productName: {
    type: String, //data type
    required: true, //validate
  },
  ProductCategory: {
    type: String,
    required: true,
  },
  materialType: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "InventoryModel", // file name
  inventorySchema //function name
);
