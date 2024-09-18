const Admin = require("../Model/adminModel");

const getAllAdmins = async (req, res, next) => {
    let admins;
    // Get all Users 
    try {
        admins = await Admin.find();
    } catch (err) {
        console.log(err);
    }
    // Not found
    if (!admins) {
        return res.status(404).json({ message: "Admin not found" });
    }

    // Display all Users
    return res.status(200).json({ admins });
};

// Data insert 
const addAdmins = async (req, res, next) => {
    const { name, email,  } = req.body;

    let admin;
    try {
        // Create new user using the Admin model
        admin = new Admin({ name, email,  });
        await admin.save();
    } catch (err) {
        console.log(err);
    }
    
    // Not able to insert user
    if (!admin) {
        return res.status(404).send({ message: "Unable to add admin" });
    }

    // Successfully inserted user
    return res.status(200).json({ admin });
};

const getById = async (req, res , next)=> {
    const aid = req.params.aid

    let admin;

    try{
       admin = await Admin.findById(aid);
    }
    catch (err) {
        console.log(err);
    }
    if (!admin) {
        return res.status(404).send({ message: "Unable to find admin" });
    }
    return res.status(200).json({admin});

}

const updateAdmin = async (req, res, next) => {
    const aid = req.params.aid;  
    const { name, email,} = req.body;

    let admin;

    try {
        admin = await Admin.findByIdAndUpdate(
            aid,  // Use 'uid' here
            { name, email },
            { new: true }  // This option returns the updated user
        );
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Error occurred while updating Admin" });
    }

    if (!admin) {
        return res.status(404).send({ message: "Admin not found or unable to update" });
    }

    return res.status(200).json({ admin });
};

const deleteAdmin = async (req, res, next) => {
    const aid = req.params.aid;
    
    let admin;

    try{
        admin=await Admin.findByIdAndDelete(aid)
    }
    catch (err) {
        console.log(err);
    }
    if (!admin) {
        return res.status(404).send({ message: "Unable to delete admin" });
    }

    return res.status(200).json({ admin });

}



exports.getAllAdmins = getAllAdmins;
exports.addAdmins = addAdmins;
exports.getById = getById;
exports.updateAdmin = updateAdmin;
exports.deleteAdmin = deleteAdmin;