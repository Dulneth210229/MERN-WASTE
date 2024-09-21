const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employeeId:{
        type:String,
        required:true,
    },
    employeeFirstName:{
        type:String,
        required:true,
    },
    employeeLastName:{
        type:String,
        required:true,
    },
    employeeCatogory:{
        type:String,
        required:true,
    },
    employeeAddress:{
        type:String,
        required:true,
    },
    
    employeeEmail:{
        type:String,
        required:true,
    },
    employeePhone:{
        type:Number,
        required:true,
    }
    



});

module.exports = mongoose.model(
    "EmployeeModel",
    employeeSchema
)