import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddRequest from "./Components/RequestService/AddRequest/AddRequest";
import ViewRequests from "./Components/RequestService/RequestDetails/Requests";
import Home from "./Components/AdminHome/AdminHome";
import InventoryHome from "./Components/Inventory/InvemtoryHome/InventoryHome";
import Crmhome from "./Components/CustomerRelationship/CrmHome/Crmhome";
import Complain from "./Components/CustomerRelationship/Complain/Complain";
import FeedbackDisplay from "./Components/CustomerRelationship/FeedbackDisplay_01/FeedbackDisplay_01";
import Support from "./Components/CustomerRelationship/Support/Support";
import AddNewInventory from "./Components/Inventory/AddNewInventory/AddNewInventory";
import AddFeedbackForm from "./Components/CustomerRelationship/AddFeedbackForm/AddFeedbackForm";


function App() {
  //java scripts
  return (
    //html
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/requestservice" element={<AddRequest />} />
          <Route path="/viewrequests" element={<ViewRequests />} />
          <Route path="/inventoryHome" element={<InventoryHome />} />
          <Route path="/addinventory" element={<AddNewInventory />} />
          <Route path="/crmHome" element={<Crmhome />} />
          <Route path="/complain" element={<Complain />} />
          <Route path="/feedbackdisplay" element={<FeedbackDisplay />} />
          <Route path="/support" element={<Support />} />
          <Route path="/AddFeedbackForm" element={<AddFeedbackForm />} />
          

        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
