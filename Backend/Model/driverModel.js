const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
     }

});


module.exports = mongoose.model(
    "driverModel" , //file name'
    driverSchema //function name
)