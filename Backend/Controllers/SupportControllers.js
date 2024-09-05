const Support = require('../Model/SupportModel');

//data display
const getAllSupport = async (req, res, next) => {
    let support;
    try {
        support = await Support.find();
    } catch (err) {
        console.log(err);
    }
    // If details not found
    if (!support) {
        return res.status(404).json({ message: 'Support not found' });
    }
    // Display all support
    return res.status(200).json({ support });
};

//data insert
const addSupport = async (req, res, next) => {

    const {additonalServices, name, email, address, city, subject, message} = req.body;

    let support;

    try{
        support = new Support({additonalServices, name, email, address, city, subject, message});
        await support.save();
    }catch(err){
        console.log(err);
    }

    //not insert users
    if(!support){
        return res.status(404).send({message:"unable to add support"});
    }
    return res.status(200).json({ support });
};

//Get by Id
const getById = async (req, res, next) => {

    const id = req.params.id;

    let support;

    try {
        support = await Support.findById(id);
    }catch(err){
        console.log(err);
    }

    //not availabel support
    if(!support){
        return res.status(404).send({message:"support not found"});
    }
    return res.status(200).json({ support });
}

//Update support Details
const updateSupport = async (req, res, next) => {

    const id = req.params.id;

    const {additonalServices, name, email, address, city, subject, message} = req.body;

    let supports;

    try{
        supports = await Support.findByIdAndUpdate(id, 
            {additonalServices: additonalServices, name: name, email: email, address: address, city: city, subject: subject, message:message});
            supports = await supports.save();
    }catch(err){
        console.log(err);
    }
    if(!supports){
        return res.status(404).send({message:"Unable to update support"});
    }
    return res.status(200).json({ supports });

};

//Delete support details
const deleteSupport = async (req, res, next) => {
    
        const id = req.params.id;
    
        let support;
    
        try{
            support = await Support.findByIdAndDelete(id);
        }catch(err){
            console.log(err);
        }
        if(!support){
            return res.status(404).send({message:"Unable to delete support"});
        }
        return res.status(200).json({ support });
};


        
exports.getAllSupport = getAllSupport;
exports.addSupport = addSupport;
exports.getById = getById;
exports.updateSupport = updateSupport;
exports.deleteSupport = deleteSupport;
