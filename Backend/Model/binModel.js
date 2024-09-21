const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const binSchema = new Schema({
     ID:{
        type:String,
        required:true,//validate
     },

     latitude:{
        type:String,
        required:true,//validate
     },

     longitude:{
        type:String,
        required:true,//validate
     },

     landmark:{
        type:String,
        required:true,//validate
     }

});


module.exports = mongoose.model(
    "binModel" , //file name'
    binSchema //function name
)