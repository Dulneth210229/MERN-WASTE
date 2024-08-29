const Feedback = require('../Model/FeedbackModel');

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

exports.getAllFeedback = getAllFeedback;