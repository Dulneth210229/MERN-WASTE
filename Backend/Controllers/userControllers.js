const User = require("../Model/userModel");

const getAllUsers = async (req, res, next) => {
    let users;
    // Get all Bins 
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
    const { name, email, address, password, NID } = req.body;

    let user;
    try {
        // Create new user using the User model
        user = new User({name, email, address, password, NID });
        await user.save();
    } catch (err) {
        console.log(err);
    }
    
    // Not able to insert user
    if (!user) {
        return res.status(404).send({ message: "Unable to add  user" });
    }

    // Successfully inserted user
    return res.status(200).json({ user });
};

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

const updateUser = async (req, res, next) => {
    const uid = req.params.uid;  
    const { ID, name, email, address, password, NID  }  = req.body;

    let user;

    try {
        user = await User.findByIdAndUpdate(
            uid,  // Use 'bid' here
            { ID, name, email, address, password, NID } ,
            { new: true }  // This option returns the updated bin
        );
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Error occurred while updating user" });
    }

    if (!user) {
        return res.status(404).send({ message: "user not found or unable to update" });
    }

    return res.status(200).json({ user });
};

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

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    let user;
    try {
        // Find the user with the provided email and password
        user = await User.findOne({ email, password });
    } catch (err) {
        return res.status(500).json({ message: "Server error" });
    }

    if (!user) {
        return res.status(404).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({ message: "Login successful", user });
};



exports.loginUser = loginUser; 
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;

