const Plan = require("../Model/PlanModel");

 //data displayed

 const getAllPlans =  async (req, res, next) => {

    let plans;
//get all users
    try{

        plans = await Plan.find();

    }catch(err){
            console.log(err);

    }
    // not found

    if(!plans){
        return res.status(404).json({message: "plans not found"});
    }
    // Display all users
    
    return res.status(200).json({plans});

};

//data inserted

const addPlans = async (req, res, next) => {

    const {packageName,packagePrice,features} = req.body;

    let plans;
    

    try{

        plans = new Plan ( {packageName,packagePrice,features});
        await plans.save();


    }catch(err){

        console.log(err);
    }
    // not insert users

    if(!plans){
        return res.status(404).json({message:"unable to add plans"});
    }

    return res.status(200).json({plans});


}

//get by id


const getPlanById = async (req, res, next) => {


    const id = req.params.id;

    let plan;

    try{

        plan = await Plan.findById(id);
    }catch (err){

        console.log(err);

    }
//not available users
    if(!plan){
        return res.status(404).json({message:" plan Not fund"});
    }

    return res.status(200).json({plan});

}

//update by datails

const updatePlan = async (req, res, next) => {

    const id =req.params.id;
    const {packageName,packagePrice,features} = req.body;
    
    let plans;

    try{

        plans = await Plan.findByIdAndUpdate(id, {packageName,packagePrice,features});

        plans = await plans.save();

    }catch(err){


        console.log(err);
    }

    if(!plans){
        return res.status(404).json({message:" Unable to Update plan Details"});
    }

    return res.status(200).json({plans});



};

// delect user details
const delectPlan= async (req, res, next) => {

    const id =req.params.id;

    let plan;

    try{

        plan= await Plan.findByIdAndDelete(id)

    }catch(err){
        console.log(err);


    }
    if(!plan){
        return res.status(404).json({message:" Unable to Delect User Details"});
    }

    return res.status(200).json({plan});



};


exports.getAllPlans= getAllPlans;
exports.addPlans= addPlans;
exports.getPlanById= getPlanById;
exports.updatePlan= updatePlan;
exports.delectPlan = delectPlan;