const mongoose= require("mongoose");
const Schema =mongoose.Schema;

const paymentplanSchema = new Schema({

    accountName: {
        type: String,//type: String
        required: true,//value

    },


    accountNumber: {
        type: Number,//type: Number
        required: true,//value

    },
    
    bankName: {
        type: String,//type: String
        required: true,//value
    },

    date: {
        type: Date,//type: Date
        required: true//value
    },


    amount: {

        type: Number,//type: Number
        required: true//value

    }


});

module.exports = mongoose.model(
    "PaymentPlanModel",    //file name
     paymentplanSchema   //function name
)