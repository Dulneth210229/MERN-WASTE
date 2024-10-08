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

//export
module.exports = requestRouter;