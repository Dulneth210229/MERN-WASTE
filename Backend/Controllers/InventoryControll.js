const Inventory = require("../Model/InventoryModel");

//creating a function to get details
//display all inventory
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

//insert inventory data
const addInventory = async (req, res, next) => {
  const {
    productName,
    ProductCategory,
    materialType,
    quantity,
    productDescription,
    unit,
    Date,
  } = req.body;

  let inventory;
  try {
    inventory = new Inventory({
      productName,
      ProductCategory,
      materialType,
      quantity,
      productDescription,
      unit,
      Date,
    });
    await inventory.save();
  } catch (err) {
    console.log(err);
  }
  // If not inserted
  if (!inventory) {
    return res.status(404).json({ message: "Unable to add inventory" });
  }
  return res.status(200).json({ inventory });
};

//Get by ID
const getInventoryById = async (req, res, next) => {
  const inventoryId = req.params.Iid;
  let inventory;
  try {
    inventory = await Inventory.findById(inventoryId);
  } catch (err) {
    console.log(err);
  }
  //not available inventory
  if (!inventory) {
    return res.status(404).json({ message: "Inventory not found" });
  }
  return res.status(200).json({ inventory });
};

//Update inventory details
const updateInventory = async (req, res, next) => {
  const inventoryId = req.params.Iid;
  const {
    productName,
    ProductCategory,
    materialType,
    quantity,
    productDescription,
    unit,
    Date,
  } = req.body;

  let inventories;
  try {
    inventories = await Inventory.findByIdAndUpdate(inventoryId, {
      productName,
      ProductCategory,
      materialType,
      quantity,
      productDescription,
      unit,
      Date,
    });
    inventories = await inventories.save();
  } catch (err) {
    console.log(err);
  }
  //not updated
  if (!inventories) {
    return res.status(404).json({ message: "Unable to update inventory" });
  }
  return res.status(200).json({ inventories });
};

//delete inventory
const deleteInventory = async (req, res, next) => {
  const inventoryId = req.params.Iid;
  let inventory;
  try {
    inventory = await Inventory.findByIdAndDelete(inventoryId);
  } catch (err) {
    console.log(err);
  }
  //not deleted
  if (!inventory) {
    return res.status(404).json({ message: "Unable to delete inventory" });
  }
  return res.status(200).json({ inventory });
};

//export to routers
exports.getInventory = getInventory;
exports.addInventory = addInventory;
exports.getInventoryById = getInventoryById;
exports.updateInventory = updateInventory;
exports.deleteInventory = deleteInventory;
