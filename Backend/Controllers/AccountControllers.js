const Account = require("../Model/AccountModel");

// data displayed
const getAllAccount =  async (req, res, next) => {
    let account;

//get all account
    try{
        account = await Account.find();

    }catch(err){
            console.log(err);
    }
    // not found
    if(!account){
        return res.status(404).json({message: "Account not found"});
    }
    // Display all account
    return res.status(200).json({account});

};

//Insert data
const addAccount = async (req, res,next) => {

    const {
        First_Name,
        Last_Name,
        NIC,
        Employee_ID,
        Designation,
        Basic_Salary,
        Allowance, 
        ETF,
        EPF, 
        Total_Salary,
    } = req.body;

    let account;

    try{
       account = new Account({
        First_Name,
        Last_Name,
        NIC,
        Employee_ID,
        Designation,
        Basic_Salary,
        Allowance, 
        ETF,
        EPF, 
        Total_Salary,
    });
    await account.save();
    }catch(err){
        console.log(err);
    }

    //not insert account
    if(!account){
        return res.status(404).json({message:"Unable to add account"});
    }
    return res.status(200).json({account});
};

//Get by Id
const getAccountById = async (req, res,next) => {
    const id = req.params.id;
    let account;
    try{
        account = await Account.findById(id);
    }catch (err) {
        console.log(err);
    }

     //not available account
     if(!account){
        return res.status(404).json({message:"Account not found"});
    }
    return res.status(200).json({account});
   
}

//Update Account details
const updateAccount = async(req, res, next) => {
    const id = req.params.id;
    const {
        First_Name,
        Last_Name,
        NIC,
        Employee_ID,
        Designation,
        Basic_Salary,
        Allowance, 
        ETF,
        EPF, 
        Total_Salary,
    } = req.body;
    let account;
    try{
        account = await Account.findByIdAndUpdate(id, {
            First_Name,
            Last_Name,
            NIC,
            Employee_ID,
            Designation,
            Basic_Salary,
            Allowance, 
            ETF,
            EPF, 
            Total_Salary,
        });
           accounts = await account.save();
    }catch(err){
        console.log(err);
    }

    //not available account
    if(!account){
        return res.status(404).json({message:"Unable to update account details"});
    }

    console.log( Total_Salary);
    return res.status(200).json({account});
   
    
};

//Delete account details
const deleteAccount = async (req, res, next) =>{
    const id = req.params.id;
    let account;
    try{
        account = await Account.findByIdAndDelete(id)
    }catch (err){
        console.log(err);
    }

     //not available account
     if(!account){
        return res.status(404).json({message:"Unable to Delete account details"});
    }
    return res.status(200).json({account});
   

};




exports.getAllAccount = getAllAccount;
exports.addAccount= addAccount;
exports.getAccountById = getAccountById;
exports.updateAccount = updateAccount;
exports.deleteAccount = deleteAccount;

