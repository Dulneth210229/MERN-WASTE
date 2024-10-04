const mongoose = require("mongoose");
const { Schema } = mongoose;  

const driverSchema = new Schema({
     name:{
        type:String,
        required:true,//validate
     },

     email:{
        type:String,
        required:true,//validate
     },

     NID:{
        type:String,
        required:true,//validate
     },

     Dlicense:{
        type:String,
        required:true,//validate
     },

     password: {
      type: String,
      required: true,  
    },

});

module.exports = mongoose.model("Driver", driverSchema);
