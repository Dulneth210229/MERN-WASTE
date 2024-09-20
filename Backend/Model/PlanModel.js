const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planmodelSchema = new Schema({
  packageName: {
    type: String, //type: String
    required: true, //value
  },

  packagePrice: {
    type: Number, //type: Number
    required: true, //value
  },

  features: {
    type: [String], //type: String
    required: true, //value
  },


});

module.exports = mongoose.model(
  "PlanModel", //file name
  planmodelSchema //function name
);
