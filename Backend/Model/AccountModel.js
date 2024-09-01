const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    First_Name:{
        type:String,//datatype
        required:true,//validate
    },
    Last_Name:{
        type:String,//datatype
        required:true,//validate
    },
    NIC:{
        type:String,//datatype
        required:true,//validate
    },
    Employee_ID:{
        type:String,//datatype
        required:true,//validate
    },
    Designation:{
        type:String,//datatype
        required:true,//validate
    },
    Basic_Salary:{
        type:Number,//datatype
        required:true,//validate
    },
    Allowance:{
        type:Number,//datatype
        required:true,//validate
    },
    ETF:{
        type:Number,//datatype
        required:true,//validate
    },
    EPF:{
        type:Number,//datatype
        required:true,//validate
    },
    Total_Salary:{
        type:Number,//datatype
        required:true,//validate
    },
});

module.exports = mongoose.model(
    "AccountModel",//file name
    accountSchema //function name
);