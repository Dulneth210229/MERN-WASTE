import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddRequest from "./Components/RequestService/AddRequest/AddRequest";
import ViewRequests from "./Components/RequestService/RequestDetails/Requests";
import Home from "./Components/AdminHome/AdminHome";
import InventoryHome from "./Components/Inventory/InvemtoryHome/InventoryHome";
import AddNewInventory from "./Components/Inventory/AddNewInventory/AddNewInventory";

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
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
