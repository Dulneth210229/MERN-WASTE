const Category = require("../Model/CategoryModel");

//data display
const getAllCategory = async (req, res, next) => {

    let category;

    //get all category
    try{
        category = await Category.find();
    }catch (err) {
        console.log(err);
    }

    //not found
    if(!category){
        return res.status(404).json({message:"category not found"});
    }

    //display all categories
    return res.status(200).json({ category });



};

//data insert
const addCategory = async (req, res, next) => {

    const {WasteType,Quantity,DateOfCollection,Location,TransportMethod,Notes} = req.body;

    let category;

    try{
        category = new Category({WasteType, Quantity, DateOfCollection, Location, TransportMethod, Notes});
        await category.save();
    }catch (err) {
        console.log(err);
    }

    //not insert category
    if(!category){
        return res.status(404).json({ message: "unable to add categories"});
    }
    return res.status(200).json({ category });

};


exports.getAllCategory = getAllCategory;
exports.addCategory = addCategory;
