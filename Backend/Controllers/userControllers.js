const User = require("../Model/userModel");

const getAllUsers = async (req, res, next) => {
    let users;
    // Get all Users 
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    // Not found
    if (!users) {
        return res.status(404).json({ message: "User not found" });
    }

    // Display all Users
    return res.status(200).json({ users });
};

// Data insert 
const addUsers = async (req, res, next) => {
    const { name, email, NID, address } = req.body;

    let user;
    try {
        // Create new user using the User model
        user = new User({ name, email, NID, address });
        await user.save();
    } catch (err) {
        console.log(err);
    }
    
    // Not able to insert user
    if (!user) {
        return res.status(404).send({ message: "Unable to add user" });
    }

    // Successfully inserted user
    return res.status(200).json({ user });
};

//Get BY ID
const getById = async (req, res , next)=> {
    const uid = req.params.uid

    let user;

    try{
       user = await User.findById(uid);
    }
    catch (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(404).send({ message: "Unable to find user" });
    }
    return res.status(200).json({user});

}

//Update User Details 
const updateUser = async (req, res, next) => {
    const uid = req.params.uid;  
    const { name, email, NID, address } = req.body;

    let user;

    try {
        user = await User.findByIdAndUpdate(
            uid,  // Use 'uid' here
            { name, email, NID, address },
            { new: true }  // This option returns the updated user
        );
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Error occurred while updating user" });
    }

    if (!user) {
        return res.status(404).send({ message: "User not found or unable to update" });
    }

    return res.status(200).json({ user });
};

//Delete user details 
const deleteUser = async (req, res, next) => {
    const uid = req.params.uid;
    
    let user;

    try{
        user=await User.findByIdAndDelete(uid)
    }
    catch (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(404).send({ message: "Unable to delete user" });
    }

    return res.status(200).json({ user });

}



exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;