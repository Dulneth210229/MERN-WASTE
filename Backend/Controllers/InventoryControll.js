const Inventory = require("../Model/InventoryModel");

//creating a function to get details
const getInventory = async (req, res, next) => {
  let inventory;
  //get Inventory Details
  try {
    inventory = await Inventory.find();
  } catch (err) {
    console.log(err);
  }
  // If details not found
  if (!inventory) {
    return res.status(404).json({ message: "Inventory not found" });
  }
  // Display all inventory
  return res.status(200).json({ inventory });
};
//export to routers
exports.getInventory = getInventory;
