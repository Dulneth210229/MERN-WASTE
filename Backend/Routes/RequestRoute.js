const express = require("express");
const requestRouter = express.Router();

//Insert Model
const Request = require('../Model/RequestModel');

//Insert Request Controller
const RequestController = require('../Controllers/RequestController');

requestRouter.get('/', RequestController.getAllRequests);
requestRouter.post('/', RequestController.addRequests);
requestRouter.get('/:id', RequestController.getRequestById);
requestRouter.put('/:id', RequestController.updateRequest);
requestRouter.delete('/:id', RequestController.deleteRequest);
requestRouter.put('/:id', RequestController.updateStatus);

requestRouter.put("/:id", RequestController.updateRequestStatus);

// app.put('/request/:id', async (req, res) => {
//     const { id } = req.params;
//     const { status } = req.body;
  
//     try {
//       const updatedRequest = await Request.findByIdAndUpdate(id, { status }, { new: true });
      
//       if (!updatedRequest) {
//         return res.status(404).json({ message: "Request not found" });
//       }
  
//       res.json(updatedRequest);
//     } catch (error) {
//       res.status(500).json({ message: "Error updating request status", error });
//     }
//   });

//export
module.exports = requestRouter;