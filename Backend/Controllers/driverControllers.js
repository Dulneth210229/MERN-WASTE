const Driver = require("../Model/driverModel");

// Get all drivers
const getAllDrivers = async (req, res, next) => {
    let drivers;

    try {
        drivers = await Driver.find();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server error" }); // Add error handling
    }

    // Not found
    if (!drivers || drivers.length === 0) {
        return res.status(404).json({ message: "No drivers found" });
    }

    // Display all drivers
    return res.status(200).json({ drivers });
};

// Data insert 
const addDrivers = async (req, res, next) => {
    const { name, email, Dlicense, password, NID } = req.body;

    let driver;
    try {
        // Create new driver using the Driver model
        driver = new Driver({ name, email, Dlicense, password, NID });
        await driver.save();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error adding driver" }); // Add error handling
    }

    // Successfully inserted driver
    return res.status(201).json({ driver }); // Use 201 for resource creation
};

// Get driver by ID
const getById = async (req, res, next) => {
    const uid = req.params.uid;

    let driver;

    try {
        driver = await Driver.findById(uid);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server error" }); // Add error handling
    }

    if (!driver) {
        return res.status(404).json({ message: "Driver not found" });
    }
    return res.status(200).json({ driver });
};

// Update driver
const updateDriver = async (req, res, next) => {
    const uid = req.params.uid;
    const { name, email, Dlicense, password, NID } = req.body; // Ensure keys match schema

    let driver;

    try {
        driver = await Driver.findByIdAndUpdate(
            uid,
            { name, email, Dlicense, password, NID },
            { new: true } // Return the updated driver
        );
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error occurred while updating driver" }); // Add error handling
    }

    if (!driver) {
        return res.status(404).json({ message: "Driver not found or unable to update" });
    }

    return res.status(200).json({ driver });
};

// Delete driver
const deleteDriver = async (req, res, next) => {
    const uid = req.params.uid;

    let driver;

    try {
        driver = await Driver.findByIdAndDelete(uid);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server error" }); // Add error handling
    }
    
    if (!driver) {
        return res.status(404).json({ message: "Unable to delete driver" });
    }

    return res.status(200).json({ driver });
};

// Login driver
const loginDriver = async (req, res, next) => {
    const { email, password } = req.body;

    let driver;
    try {
        // Find the driver with the provided email and password
        driver = await Driver.findOne({ email, password });
    } catch (err) {
        return res.status(500).json({ message: "Server error" });
    }

    if (!driver) {
        return res.status(404).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({ message: "Login successful", driver });
};

// Export the functions
exports.getAllDrivers = getAllDrivers; 
exports.addDrivers = addDrivers;
exports.getById = getById;
exports.updateDriver = updateDriver;
exports.deleteDriver = deleteDriver;
exports.loginDriver = loginDriver;
