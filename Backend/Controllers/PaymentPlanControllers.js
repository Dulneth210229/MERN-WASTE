const PaymentPlan = require("../Model/PaymentPlanModel");

 //data displayed

 const getAllPaymentPlans =  async (req, res, next) => {

    let paymentplans;
//get all users
    try{

        paymentplans = await PaymentPlan.find();

    }catch(err){
            console.log(err);

    }
    // not found

    if(!paymentplans){
        return res.status(404).json({message: "Payment not found"});
    }
    // Display all users
    
    return res.status(200).json({paymentplans});

};

//data inserted

const addPaymentPlans = async (req, res, next) => {

    const {accountName,accountNumber,bankName,date,amount} = req.body;

    let paymentplans;
    

    try{

        paymentplans = new PaymentPlan ({accountName,accountNumber,bankName,date,amount});
        await paymentplans.save();


    }catch(err){

        console.log(err);
    }
    // not insert users

    if(!paymentplans){
        return res.status(404).json({message:"unable to add payment"});
    }

    return res.status(200).json({paymentplans});


}

//get by id


const getPaymentPlanById = async (req, res, next) => {


    const id = req.params.id;

    let paymentplan;

    try{

        paymentplan = await PaymentPlan.findById(id);
    }catch (err){

        console.log(err);

    }
//not available users
    if(!paymentplan){
        return res.status(404).json({message:" payment Not fund"});
    }

    return res.status(200).json({paymentplan});

}

//update by datails

const updatePaymentPlan = async (req, res, next) => {

    const id =req.params.id;
    const {accountName,accountNumber,bankName,date,amount} = req.body;
    
    let paymentplans;

    try{

        paymentplans = await PaymentPlan.findByIdAndUpdate(id, {accountName,accountNumber,bankName,date,amount});

        paymentplans = await paymentplans.save();

    }catch(err){


        console.log(err);
    }

    if(!paymentplans){
        return res.status(404).json({message:" Unable to Update payment Details"});
    }

    return res.status(200).json({paymentplans});



};

// delect user details
const delectPaymentPlan= async (req, res, next) => {

    const id =req.params.id;

    let paymentplan;

    try{

        paymentplan= await PaymentPlan.findByIdAndDelete(id)

    }catch(err){
        console.log(err);


    }
    if(!paymentplan){
        return res.status(404).json({message:" Unable to Delect User Details"});
    }

    return res.status(200).json({paymentplan});



};


exports. getAllPaymentPlans= getAllPaymentPlans;
exports.addPaymentPlans= addPaymentPlans;
exports.getPaymentPlanById= getPaymentPlanById;
exports.updatePaymentPlan= updatePaymentPlan;
exports.delectPaymentPlan = delectPaymentPlan;