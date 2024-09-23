const Employee = require("../Model/EmployeeModel");


const getEmployee = async (req, res, next) => {
    let employees;
    try {
        employees = await Employee.find();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }

    // Check if employees array is empty
    if (employees.length === 0) {
        return res.status(404).json({ message: "No employees found" });
    }

    return res.status(200).json({ employees });
};

//data Insert
const addEmployee = async (req, res, next)=>{
    const {employeeId, employeeFirstName, employeeLastName, employeeCatogory, employeeAddress, employeeEmail, employeePhone}=req.body;
    let employee;
    try{
        employee = new Employee({employeeId, employeeFirstName, employeeLastName, employeeCatogory, employeeAddress, employeeEmail, employeePhone});
        await employee.save();
}catch (err){
    console.log(err);
}

//not insert Employee
if(!employee )
{
    return res.status(404).json({message:"unable to add Employee"});
}
return res.status(200).json({employee});
};

//Get by Id
const getById = async (req, res, next) => {
    let employees;
    const employeeId = req.params.id;

    try {
        employees = await Employee.find();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }

    if (employees.length === 0) {
        return res.status(404).json({ message: "No employees found" });
    }

    const employee = employees.find(emp => emp.employeeId === employeeId);

    if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
    }
    return res.status(200).json({ employee });
};

//update employee details
const updateEmployee = async (req, res, next) => {
    const employeeId = req.params.id;
    const {
        employeeFirstName,
        employeeLastName,
        employeeCatogory,
        employeeAddress,
        employeeEmail,
        employeePhone
    } = req.body;

    try {

        const updatedEmployee = await Employee.findOneAndUpdate(
            { employeeId },
            {
                employeeFirstName,
                employeeLastName,
                employeeCatogory,
                employeeAddress,
                employeeEmail,
                employeePhone
            },
            { new: true, runValidators: true }
        );

        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        return res.status(200).json({ employee: updatedEmployee });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

//delete Employee
const deleteEmployee = async (req, res, next) => {
    const employeeId = req.params.id;
    let deletedEmployee;

    try {
        deletedEmployee = await Employee.findOneAndDelete({ employeeId });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }

    if (!deletedEmployee) {
        return res.status(404).json({ message: "Employee not found" });
    }

    return res.status(200).json({ message: "Employee deleted successfully", employee: deletedEmployee });
};

exports.getEmployee = getEmployee;
exports.addEmployee = addEmployee;
exports.getById = getById;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee = deleteEmployee;