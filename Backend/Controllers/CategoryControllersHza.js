const Hazardous = require("../Model/CategoryModelsHza");

//data display
const getAllHazardous = async (req, res, next) => {

    let hazardous;

    //get all category
    try{
        hazardous = await Hazardous.find();
    }catch (err) {
        console.log(err);
    }

    //not found
    if(!hazardous){
        return res.status(404).json({message:"category not found"});
    }

    //display all categories
    return res.status(200).json({ hazardous });



};

//data insert
const addHazardous = async (req, res, next) => {

    const {WasteType,Quantity,DateOfCollection,Location,TransportMethod,Notes} = req.body;

    let hazardous;

    try{
        hazardous = new Hazardous({WasteType, Quantity, DateOfCollection, Location, TransportMethod, Notes});
        await hazardous.save();
    }catch (err) {
        console.log(err);
    }

    //not insert category
    if(!hazardous){
        return res.status(404).json({ message: "unable to add categories"});
    }
    return res.status(200).json({ hazardous });

};

//Get by Id
const getHazardousById = async (req, res, next) => {

    const id = req.params.id;

    let hazardous;


    try{
        hazardous = await Hazardous.findById(id);
    }catch (err) {
        console.log(err);
    }

        //not available category
        if(!hazardous){
            return res.status(404).json({ message: "Category Not Found"});
        }
        return res.status(200).json({ hazardous });
    

}

//Update user details
const updateHazardous = async (req, res, next) => {

    const id = req.params.id;
    const {WasteType,Quantity,DateOfCollection,Location,TransportMethod,Notes} = req.body;

    let hazardous;

    try{
        hazardous = await Hazardous.findByIdAndUpdate(id,
            { WasteType: WasteType, Quantity: Quantity, DateOfCollection: DateOfCollection, Location: Location, TransportMethod: TransportMethod, Notes:Notes });
            hazardous = await hazardous.save();
    }catch(err) {
        console.log(err);
    }

    if(!hazardous){
        return res.status(404).json({ message: "Unable to Update Category Details"});
    }
    return res.status(200).json({ hazardous });

};

//Delete category details
const deleteHazardous = async (req, res, next) => {
    const id = req.params.id;

    let hazardous;
    
    try{
        hazardous = await Hazardous.findByIdAndDelete(id)
    }catch (err) {
        console.log(err);
    }

    if(!hazardous){
        return res.status(404).json({ message: "Unable to Delete Category Details"});
    }
    return res.status(200).json({ hazardous });

};

exports.getAllHazardous = getAllHazardous;
exports.addHazardous = addHazardous;
exports.getHazardousById = getHazardousById;
exports.updateHazardous = updateHazardous;
exports.deleteHazardous = deleteHazardous;