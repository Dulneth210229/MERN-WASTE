const Feedback = require('../Model/FeedbackModel');

//data display
const getAllFeedback = async (req, res, next) => {
    let feedback;
    try {
        feedback = await Feedback.find();
    } catch (err) {
        console.log(err);
    }
    // If details not found
    if (!feedback) {
        return res.status(404).json({ message: 'Feedback not found' });
    }
    // Display all feedback
    return res.status(200).json({ feedback });
};

//data insert
const addFeedback = async (req, res, next) => {

    const {name, email, address, phone, comment, rating} = req.body;

    let feedback;

    try{
        feedback = new Feedback({name, email, address, phone, comment, rating});
        await feedback.save();
    }catch(err){
        console.log(err);
    }

    //not insert users
    if(!feedback){
        return res.status(404).send({message:"unable to add feedback"});
    }
    return res.status(200).json({ feedback });
};

//Get by Id
const getById = async (req, res, next) => {

    const id = req.params.id;

    let feedback;

    try {
        feedback = await Feedback.findById(id);
    }catch(err){
        console.log(err);
    }

    //not availabel feedback
    if(!feedback){
        return res.status(404).send({message:"feedback not found"});
    }
    return res.status(200).json({ feedback });
}
        
exports.getAllFeedback = getAllFeedback;
exports.addFeedback = addFeedback;
exports.getById = getById;