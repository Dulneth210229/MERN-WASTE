const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
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

     address:{
        type:String,
        required:true,//validate
     }

});


module.exports = mongoose.model(
    "userModel" , //file name'
    userSchema //function name
)