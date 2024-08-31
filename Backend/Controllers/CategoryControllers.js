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

//Get by Id
const getCategoryById = async (req, res, next) => {

    const id = req.params.id;

    let category;


    try{
        category = await Category.findById(id);
    }catch (err) {
        console.log(err);
    }

        //not available category
        if(!category){
            return res.status(404).json({ message: "Category Not Found"});
        }
        return res.status(200).json({ category });
    

}

//Update user details
const updateCategory = async (req, res, next) => {

    const id = req.params.id;
    const {WasteType,Quantity,DateOfCollection,Location,TransportMethod,Notes} = req.body;

    let category;

    try{
        category = await Category.findByIdAndUpdate(id,
            { WasteType: WasteType, Quantity: Quantity, DateOfCollection: DateOfCollection, Location: Location, TransportMethod: TransportMethod, Notes:Notes });
            category = await category.save();
    }catch(err) {
        console.log(err);
    }

    if(!category){
        return res.status(404).json({ message: "Unable to Update Category Details"});
    }
    return res.status(200).json({ category });

};

//Delete category details
const deleteCategory = async (req, res, next) => {
    const id = req.params.id;

    let category;
    
    try{
        category = await Category.findByIdAndDelete(id)
    }catch (err) {
        console.log(err);
    }

    if(!category){
        return res.status(404).json({ message: "Unable to Delete Category Details"});
    }
    return res.status(200).json({ category });

};

exports.getAllCategory = getAllCategory;
exports.addCategory = addCategory;
exports.getCategoryById = getCategoryById;
exports.updateCategory = updateCategory;
exports.deleteCategory = deleteCategory;