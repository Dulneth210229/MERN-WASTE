const Order = require("../Model/OrderModel");

//creating a function to get details
//display all order
const getOrder = async (req, res, next) => {
  let order;
  //get Inventory Details
  try {
    order = await Order.find();
  } catch (err) {
    console.log(err);
  }
  // If details not found
  if (!order) {
    return res.status(404).json({ message: "order not found" });
  }
  // Display all order
  return res.status(200).json({ order });
};

//insert order data
const addOrder = async (req, res, next) => {
  const {
    productName,
    productCategory,
    seller,
    deliveryType,
    trakingID,
    orderDescription,
    unitPrice,
    quantity,
    orderTotal,
    paymentType,
    Date,
  } = req.body;

  let order;
  try {
    order = new Order({
      productName,
      productCategory,
      seller,
      deliveryType,
      trakingID,
      orderDescription,
      unitPrice,
      quantity,
      orderTotal,
      paymentType,
      Date,
    });
    await order.save();
  } catch (err) {
    console.log(err);
  }
  // If not inserted
  if (!order) {
    return res.status(404).json({ message: "Unable to add order" });
  }
  return res.status(200).json({ order });
};

//Get by ID
const getOrderById = async (req, res, next) => {
  const orderId = req.params.Oid;
  let order;
  try {
    order = await Order.findById(orderId);
  } catch (err) {
    console.log(err);
  }
  //not available inventory
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  return res.status(200).json({ order });
};

//Update inventory details
const updateOrder = async (req, res, next) => {
  const orderId = req.params.Oid;
  const {
    productName,
    productCategory,
    seller,
    deliveryType,
    trakingID,
    orderDescription,
    unitPrice,
    quantity,
    orderTotal,
    paymentType,
    Date,
  } = req.body;

  let orders;
  try {
    orders = await Order.findByIdAndUpdate(orderId, {
      productName,
      productCategory,
      seller,
      deliveryType,
      trakingID,
      orderDescription,
      unitPrice,
      quantity,
      orderTotal,
      paymentType,
      Date,
    });
    orders = await orders.save();
  } catch (err) {
    console.log(err);
  }
  //not updated
  if (!orders) {
    return res.status(404).json({ message: "Unable to update Order" });
  }
  return res.status(200).json({ orders });
};

//delete Order
const deleteOrder = async (req, res, next) => {
  const orderId = req.params.Oid;
  let order;
  try {
    order = await Order.findByIdAndDelete(orderId);
  } catch (err) {
    console.log(err);
  }
  //not deleted
  if (!order) {
    return res.status(404).json({ message: "Unable to delete inventory" });
  }
  return res.status(200).json({ order });
};

//export to routers
exports.getOrder = getOrder;
exports.addOrder = addOrder;
exports.getOrderById = getOrderById;
exports.updateOrder = updateOrder;
exports.deleteOrder = deleteOrder;
