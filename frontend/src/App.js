import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddRequest from "./Components/RequestService/AddRequest/AddRequest";
import ViewRequests from "./Components/RequestService/RequestDetails/Requests";
import Home from "./Components/AdminHome/AdminHome";
import InventoryHome from "./Components/Inventory/InvemtoryHome/InventoryHome";
import Crmhome from "./Components/CustomerRelationship/CrmHome/Crmhome";
import Complain from "./Components/CustomerRelationship/Complain/Complain";
import Feedback from "./Components/CustomerRelationship/Feedback/Feedback";
import Support from "./Components/CustomerRelationship/Support/Support";
import AddNewInventory from "./Components/Inventory/AddNewInventory/AddNewInventory";
import CategoryHome from "./Components/Category/CategoryHome/CategoryHome";
import CategoryAdd from "./Components/Category/CategoryAdd/CategoryAdd";
import CategoryDetails from "./Components/Category/CategoryDetails/CategoryDetails";

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
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/support" element={<Support />} />
          <Route path="/categoryhome" element={<CategoryHome/>}/>
          <Route path="/categoryadd" element={<CategoryAdd/>}/>
          <Route path="/categorydetails" element={<CategoryDetails/>}/>


        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
