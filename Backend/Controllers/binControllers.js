const Bin = require("../Model/binModel");

const getAllBins = async (req, res, next) => {
    let bins;
    // Get all Bins 
    try {
        bins = await Bin.find();
    } catch (err) {
        console.log(err);
    }
    // Not found
    if (!bins) {
        return res.status(404).json({ message: "Bin not found" });
    }

    // Display all Users
    return res.status(200).json({ bins });
};

// Data insert 
const addBins = async (req, res, next) => {
    const { ID, latitude, longitude, landmark } = req.body;

    let bin;
    try {
        // Create new user using the User model
        bin = new Bin({ID, latitude, longitude, landmark });
        await bin.save();
    } catch (err) {
        console.log(err);
    }
    
    // Not able to insert user
    if (!bin) {
        return res.status(404).send({ message: "Unable to add  bin" });
    }

    // Successfully inserted user
    return res.status(200).json({ bin });
};

const getById = async (req, res , next)=> {
    const bid = req.params.bid

    let bin;

    try{
       bin = await Bin.findById(bid);
    }
    catch (err) {
        console.log(err);
    }
    if (!bin) {
        return res.status(404).send({ message: "Unable to find bin" });
    }
    return res.status(200).json({bin});

}

const updateBin = async (req, res, next) => {
    const bid = req.params.bid;  
    const { ID, latitude, longitude, landmark }  = req.body;

    let bin;

    try {
        bin = await Bin.findByIdAndUpdate(
            bid,  // Use 'bid' here
            { ID, latitude, longitude, landmark } ,
            { new: true }  // This option returns the updated bin
        );
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Error occurred while updating bin" });
    }

    if (!bin) {
        return res.status(404).send({ message: "Bin not found or unable to update" });
    }

    return res.status(200).json({ bin });
};

const deleteBin = async (req, res, next) => {
    const bid = req.params.bid;
    
    let bin;

    try{
        bin=await Bin.findByIdAndDelete(bid)
    }
    catch (err) {
        console.log(err);
    }
    if (!bin) {
        return res.status(404).send({ message: "Unable to delete bin" });
    }

    return res.status(200).json({ bin });

}



exports.getAllBins = getAllBins;
exports.addBins = addBins;
exports.getById = getById;
exports.updateBin = updateBin;
exports.deleteBin = deleteBin;
