const Employee = require("../Model/EmployeeModel");


const getEmployee = async (req, res, next)=>{
    let Employee;
//get all employees
    try{
        Employee = await employee.find();
    }catch(err){
        console.log(err);
    }
//not found
    if(!Employee){
        return res.status(404).json({message:"Employee not found"});
    }
//display all employees
    return res.status(200).json({Employee});
};

//data Insert
const addEmployee = async (req, res, next)=>{
    const {employeeId, employeeFirstName, employeeLastName, employeeCatogory, employeeAddress, employeeEmail, employeePhone}=req.body;
    let Employee;
    try{
        Employee = new Employees({employeeId, employeeFirstName, employeeLastName, employeeCatogory, employeeAddress, employeeEmail, employeePhone});
        await Employee.save();
}catch (err){
    console.log(err);
}

//not insert Employee
if(!Employee )
{
    return res.status(404).json({message:"unable to add Employee"});
}
return res.status(200).json({Employee});
};

//Get by Id
const getById = async (req, res, next)=>{
    const id = req.params.id;
    let Employee;
    try{
        Employee = await employee.findById(id);
    }catch (err){
        console.log(err);
    }
//not available Employee
if(!Employee )
    {
        return res.status(404).json({message:"Employee not found"});
    }
    return res.status(200).json({Employee});



};

//update employee details
const updateEmployee = async (req, res, next)=>{
    const id = req.params.id;
    const {employeeId, employeeFirstName, employeeLastName, employeeCatogory, employeeAddress, employeeEmail, employeePhone}=req.body;

    let Employee;
    try{
        Employee = await employee.findByIdAndUpdate(id, 
            {employeeId: employeeId,employeeFirstName: employeeFirstName, employeeLastName: employeeLastName, employeeCatogory:employeeCatogory, employeeAddress:employeeAddress, employeeEmail: employeeEmail, employeePhone:employeePhone });
            Employee = await Employee.save();
    }catch(err){
        console.log(err);
    }

    
if(!Employee )
    {
        return res.status(404).json({message:"Unable to update Employee Details "});
    }
    return res.status(200).json({Employee});
};

//delete Employee
const deleteEmployee = async (req, res, next)=>{
    const id = req.params.id;
    let Employee;
    try{
        Employee= await employee.findByIdAndDelete(id)
    }catch(err){
        console.log(err);
    }
    if(!Employee )
        {
            return res.status(404).json({message:"Unable to Delete Employee Details "});
        }
        return res.status(200).json({Employee});
};

exports.getEmployee = getEmployee;
exports.addEmployee = addEmployee;
exports.getById = getById;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee = deleteEmployee;