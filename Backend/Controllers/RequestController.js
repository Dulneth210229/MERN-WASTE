const Request = require("../Model/RequestModel");

//data display
const getAllRequests = async (req, res, next) => {
  let requests;

  //Get all Requests
  try {
    requests = await Request.find();
  } catch (err) {
    console.log(err);
  }

  //not found
  if (!requests) {
    return res.status(404).json({ message: "Request not found" });
  }

  //Display all users
  return res.status(200).json({ requests: requests });
};

//data insert
const addRequests = async (req, res, next) => {
  const { service, name, address, phoneNumber, date, time } = req.body;

  let request;

  try {
    request = new Request({ service, name, address, phoneNumber, date, time });
    await request.save();
  } catch (err) {
    console.log(err);
  }

  //not insert users
  if (!request) {
    return res.status(404).json({ message: "Unable to add request" });
  }
  return res.status(200).json({ request });
};

//Get by ID
const getRequestById = async (req, res, next) => {
  const id = req.params.id;

  let request;

  try {
    request = await Request.findById(id);
  } catch (err) {
    console.log(err);
  }

  //not available users
  if (!request) {
    return res.status(404).json({ message: "Request not found" });
  }
  return res.status(200).json({ request });
};

exports.getAllRequests = getAllRequests;
exports.addRequests = addRequests;
exports.getRequestById = getRequestById;
