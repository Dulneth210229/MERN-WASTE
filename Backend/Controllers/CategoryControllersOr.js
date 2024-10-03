const Recyclable = require("../Model/CategoryModelOr");

//data display
const getAllRecyclable = async (req, res, next) => {

    let recyclable;

    //get all category
    try{
        recyclable = await Recyclable.find();
    }catch (err) {
        console.log(err);
    }

    //not found
    if(!recyclable){
        return res.status(404).json({message:"category not found"});
    }

    //display all categories
    return res.status(200).json({ recyclable });



};

//data insert
const addRecyclable = async (req, res, next) => {

    const {WasteType,Quantity,DateOfCollection,Location,TransportMethod,Notes} = req.body;

    let recyclable;

    try{
        recyclable = new Recyclable({WasteType, Quantity, DateOfCollection, Location, TransportMethod, Notes});
        await recyclable.save();
    }catch (err) {
        console.log(err);
    }

    //not insert category
    if(!recyclable){
        return res.status(404).json({ message: "unable to add categories"});
    }
    return res.status(200).json({ recyclable });

};

//Get by Id
const getRecyclableById = async (req, res, next) => {

    const id = req.params.id;

    let recyclable;


    try{
        recyclable = await Recyclable.findById(id);
    }catch (err) {
        console.log(err);
    }

        //not available category
        if(!recyclable){
            return res.status(404).json({ message: "Category Not Found"});
        }
        return res.status(200).json({ recyclable });
    

}

//Update user details
const updateRecyclable = async (req, res, next) => {

    const id = req.params.id;
    const {WasteType,Quantity,DateOfCollection,Location,TransportMethod,Notes} = req.body;

    let recyclable;

    try{
        recyclable = await Recyclable.findByIdAndUpdate(id,
            { WasteType: WasteType, Quantity: Quantity, DateOfCollection: DateOfCollection, Location: Location, TransportMethod: TransportMethod, Notes:Notes });
            recyclable = await recyclable.save();
    }catch(err) {
        console.log(err);
    }

    if(!recyclable){
        return res.status(404).json({ message: "Unable to Update Category Details"});
    }
    return res.status(200).json({ recyclable });

};

//Delete category details
const deleteRecyclable = async (req, res, next) => {
    const id = req.params.id;

    let recyclable;
    
    try{
        recyclable = await Recyclable.findByIdAndDelete(id)
    }catch (err) {
        console.log(err);
    }

    if(!recyclable){
        return res.status(404).json({ message: "Unable to Delete Category Details"});
    }
    return res.status(200).json({ recyclable });

};

exports.getAllRecyclable = getAllRecyclable;
exports.addRecyclable  = addRecyclable ;
exports.getRecyclableById = getRecyclableById;
exports.updateRecyclable = updateRecyclable;
exports.deleteRecyclable = deleteRecyclable;