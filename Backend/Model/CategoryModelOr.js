const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recyclableSchema = new Schema({
    WasteType:{
        type:String, //dataType
        required:true, // validate
    },
    Quantity:{
        type:Number, //dataType
        required:true, // validate
    },
    DateOfCollection:{
        type: String, //dataType
        required:true, // validate
    },
    Location:{
        type:String, //dataType
        required:true, // validate
    },
    TransportMethod:{
        type:String, //dataType
        required:true, // validate
    },
    Notes:{
        type:String, //dataType
        required:true, // validate
    }

});

module.exports = mongoose.model(
    "CategoryModelOr", //file name
    recyclableSchema //function name
)