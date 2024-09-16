const Complain = require('../Model/ComplainModel');

//data display
const getAllComplain = async (req, res, next) => {
    let complain;
    try {
        complain = await Complain.find();
    } catch (err) {
        console.log(err);
    }
    // If details not found
    if (!complain) {
        return res.status(404).json({ message: 'Complain not found' });
    }
    // Display all copmlain
    return res.status(200).json({ complain });
};

//data insert
const addComplain = async (req, res, next) => {

    const {name, email, address, complainCategory, description, attachments} = req.body;

    let complain;

    try{
        complain = new Complain({name, email, address, complainCategory, description, attachments});
        await complain.save();
    }catch(err){
        console.log(err);
    }

    //not insert users
    if(!complain){
        return res.status(404).send({message:"unable to add complain"});
    }
    return res.status(200).json({ complain });
};

//Get by Id
const getById = async (req, res, next) => {

    const id = req.params.id;

    let complain;

    try {
        complain = await Complain.findById(id);
    }catch(err){
        console.log(err);
    }

    //not availabel complain
    if(!complain){
        return res.status(404).send({message:"complain not found"});
    }
    return res.status(200).json({ complain });
}

//Update complain Details
const updateComplain = async (req, res, next) => {

    const id = req.params.id;

    const {name, email, address, complainCategory, description, attachments} = req.body;

    let complains;

    try{
      complains = await Complain.findByIdAndUpdate(id, 
            {name: name, email: email, address: address, complainCategory: complainCategory, description: description, attachments: attachments});
            complains = await complains.save();
    }catch(err){
        console.log(err);
    }
    if(!complains){
        return res.status(404).send({message:"Unable to update complain"});
    }
    return res.status(200).json({ complains });

};

//Delete complain details
const deleteComplain = async (req, res, next) => {
    
        const id = req.params.id;
    
        let complain;
    
        try{
            complain = await Complain.findByIdAndDelete(id);
        }catch(err){
            console.log(err);
        }
        if(!complain){
            return res.status(404).send({message:"Unable to delete complain"});
        }
        return res.status(200).json({ complain });
};


        
exports.getAllComplain = getAllComplain;
exports.addComplain = addComplain;
exports.getById = getById;
exports.updateComplain = updateComplain;
exports.deleteComplain = deleteComplain;
