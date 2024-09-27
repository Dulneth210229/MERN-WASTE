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
  // const date = req.params.date;
  // const formattedDate = date.slice(0, 10);

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

//Update request details
const updateRequest = async (req, res, next) => {
  const id = req.params.id;
  const { service, name, address, phoneNumber, date, time } = req.body;

  let requests;

  try {
    requests = await Request.findByIdAndUpdate(id,
      { service: service, name: name, address: address, phoneNumber: phoneNumber, date: date, time: time });
      requests = await requests.save();
  }catch (err) {
    console.log(err);
  }

  //not updated
  if (!requests) {
    return res.status(404).json({ message: "Unable to update request details" });
  }
  return res.status(200).json({ requests });
};

//Delete request
const deleteRequest = async (req, res, next) => {
  const id = req.params.id;

  let request;

  try {
    request = await Request.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  //not deleted
  if (!request) {
    return res.status(404).json({ message: "Unable to delete request details" });
  }
  return res.status(200).json({ request });
};

// Assuming you are using Express and Mongoose
const updateStatus = async (req, res) => {
  const { id } = req.params;    // Extract the request ID from the URL
  const { status } = req.body;  // Get the new status from the request body

  try {
    // Update the request in the database
    const updatedRequest = await Request.findByIdAndUpdate(id, { status: status }, { new: true });
    
    if (!updatedRequest) {
      return res.status(404).json({ message: "Request not found" });
    }

    res.json(updatedRequest); // Send the updated request back
  } catch (error) {
    res.status(500).json({ error: "Failed to update request status" });
  }
};

const handleStatusChange = async (id, newStatus) => {
  try {
    const response = await axios.put(`http://localhost:5001/request/${id}`, {
      status: newStatus
    });
    
    // Check if the update was successful
    if (response.status === 200) {
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === id ? { ...request, status: newStatus } : request
        )
      );
    }
  } catch (error) {
    console.error("Error updating status:", error);
  }
};

// app.put('/request/:id', async (req, res) => {
//   const { id } = req.params;
//   const { status } = req.body;

//   try {
//     const updatedRequest = await Request.findByIdAndUpdate(id, { status }, { new: true });
    
//     if (!updatedRequest) {
//       return res.status(404).json({ message: "Request not found" });
//     }

//     res.json(updatedRequest);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating request status", error });
//   }
// });

// const Request = require("../models/request");

// Update request status
const updateRequestStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedRequest = await Request.findByIdAndUpdate(id, { status }, { new: true });

    if (!updatedRequest) {
      return res.status(404).json({ message: "Request not found" });
    }

    res.json(updatedRequest);
  } catch (error) {
    res.status(500).json({ message: "Error updating request status", error });
  }
};

exports.getAllRequests = getAllRequests;
exports.addRequests = addRequests;
exports.getRequestById = getRequestById;
exports.updateRequest = updateRequest;
exports.deleteRequest = deleteRequest;
exports.updateStatus = updateStatus;
exports.handleStatusChange = handleStatusChange;
exports.updateRequestStatus = updateRequestStatus;
