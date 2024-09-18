const Driver = require("../Model/driverModel");

const getAllDrivers = async (req, res, next) => {
    let drivers;

    // Get all drivers
    try {
        drivers = await Driver.find();
    } catch (err) {
        console.log(err);
    }

    // Driver not found
    if (!drivers) {
        return res.status(404).json({ message: "Driver not found" });
    }

    // Display all drivers
    return res.status(200).json({ drivers });
};

// Data insert
const addDrivers = async (req, res, next) => {
    const { name, email, NID, Dlicense } = req.body;

    let driver;
    try {
        // Create new driver using the Driver model
        driver = new Driver({ name, email, NID, Dlicense });
        await driver.save();
    } catch (err) {
        console.log(err);
    }

    // Not able to insert driver
    if (!driver) {
        return res.status(404).send({ message: "Unable to add driver" });
    }

    // Successfully inserted driver
    return res.status(200).json({ driver });
};

const getById = async (req, res , next)=> {
    const did = req.params.did

    let driver;

    try{
       driver = await Driver.findById(did);
    }
    catch (err) {
        console.log(err);
    }
    if (!driver) {
        return res.status(404).send({ message: "Unable to find driver" });
    }
    return res.status(200).json({driver});

}

const updateDriver = async (req, res, next) => {
    const did = req.params.did;  
    const { name, email, NID, Dlicense }= req.body;

    let driver;

    try {
        driver = await Driver.findByIdAndUpdate(
            did,  // Use 'did' here
            { name, email, NID, Dlicense },
            { new: true }  // This option returns the updated user
        );
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Error occurred while updating driver" });
    }

    if (!driver) {
        return res.status(404).send({ message: "Driver not found or unable to update" });
    }

    return res.status(200).json({ driver });
};

const deleteDriver = async (req, res, next) => {
    const did = req.params.did;
    
    let driver;

    try{
        driver=await Driver.findByIdAndDelete(did)
    }
    catch (err) {
        console.log(err);
    }
    if (!driver) {
        return res.status(404).send({ message: "Unable to delete driver" });
    }

    return res.status(200).json({ driver });

}

// Export the functions properly
exports.getAllDrivers = getAllDrivers;
exports.addDrivers = addDrivers;
exports.getById = getById;
exports.updateDriver = updateDriver;
exports.deleteDriver = deleteDriver;