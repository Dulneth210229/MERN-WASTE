const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
     name:{
        type:String,
        required:true,//validate
     },

     email:{
        type:String,
        required:true,//validate
     },

});


module.exports = mongoose.model(
    "adminModel" , //file name'
    adminSchema //function name
)