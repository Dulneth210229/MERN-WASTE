import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import AddRequest from "./Components/RequestService/AddRequest/AddRequest";
import ViewRequests from "./Components/RequestService/RequestDetails/Requests";
import Home from "./Components/AdminHome/AdminHome";
import InventoryHome from "./Components/Inventory/InvemtoryHome/InventoryHome";
import Crmhome from "./Components/CustomerRelationship/CrmHome/Crmhome";
// import Complain from "./Components/CustomerRelationship/Complain/ComplainDetails";
import FeedbackDisplay from "./Components/CustomerRelationship/FeedbackDisplay_01/FeedbackDisplay_01";
// import Support from "./Components/CustomerRelationship/Support/Support";
import AddNewInventory from "./Components/Inventory/AddNewInventory/AddNewInventory";
import InventoryDetails from "./Components/Inventory/Inventories/InventoryDetails";
import Inventory from "./Components/Inventory/InventoryList/Inventory";
import RequestServiceMain from "./Components/RequestService/RequestServiceMain/RequestServiceMain";
import AddFeedbackForm from "./Components/CustomerRelationship/AddFeedbackForm/AddFeedbackForm";
import AccountHome from "./Components/Account/AccountHome/AccountHome";
import Salary from "./Components/Account/Salary/Salary";
import ViewSalary from "./Components/Account/ViewSalary/ViewSalary";
import GenerateSalary from "./Components/Account/GenerateSalary/GenerateSalary";
import UpdateFeedback from "./Components/CustomerRelationship/UpdateFeedback/UpdateFeedback";
import CategoryHome from "./Components/Category/CategoryHome/CategoryHome";
import CategoryAdd from "./Components/Category/CategoryAdd/CategoryAdd";
import CategoryDetails from "./Components/Category/CategoryDetails/CategoryDetails";
import CategoryUpdate from "./Components/Category/CategoryUpdate/CategoryUpdate";
import InventoryUpdate from "./Components/Inventory/UpdateInventory/UpdateInventory";
import InventoryReport from "./Components/Inventory/Report/Report";
import SupportDisplay from "./Components/CustomerRelationship/SupportDisplay_01/SupportDisplay_01";
import RequestSupportForm from "./Components/CustomerRelationship/RequestSupportForm/RequestSupportForm";
import UpdateRequestSupport from "./Components/CustomerRelationship/UpdateRequestSupport/UpdateRequestSupport";
import UserHome from "./Components/UserHomePage/UserHome";
import UpdateRequests from "./Components/RequestService/UpdateRequest/UpdateRequest";
import UpdateSalary from "./Components/Account/UpdateSalary/UpdateSalary";
import AddSalary from "./Components/Account/AddSalary/AddSalary";
import ComplainDisplay from "./Components/CustomerRelationship/ComplainDisplay_01/ComplainDisplay_01";
import AddComplainForm from "./Components/CustomerRelationship/AddComplainForm/AddComplainForm";
import UpdateComplain from "./Components/CustomerRelationship/UpdateComplain/UpdateComplain";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Components/InventoryReg/Register";
import PackageManagement  from "./Components/PlanManegment/PackageManagement";
import FirstHome from "./Components/FirstHome/FirstHome";
import Login from "./Components/Login/Login";


function App() {
  //java scripts
  return (
    //html
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/firstPage" element={<FirstHome />} />
          <Route path="/addrequest" element={<AddRequest />} />
          <Route path="/viewrequests" element={<ViewRequests />} />
          <Route path="/inventoryHome" element={<InventoryHome />} />
          <Route path="/addinventory" element={<AddNewInventory />} />
          <Route path="/crmHome" element={<Crmhome />} />
          {/* <Route path="/complain" element={<Complain />} /> */}
          <Route path="/feedbackdisplay" element={<FeedbackDisplay />} />
          {/* <Route path="/support" element={<Support />} /> */}
          <Route path="/inventoryDeatails" element={<InventoryDetails />} />
          <Route path="/inventoryList" element={<Inventory />} />
          <Route path="/requestservicemain" element={<RequestServiceMain />} />
          <Route path="/AddFeedbackForm" element={<AddFeedbackForm />} />
          <Route path="/AccountHome" element={<AccountHome />} />
          <Route path="/Salary" element={<Salary />} />
          <Route path="/ViewSalary" element={<ViewSalary />} />
          <Route path="/GenerateSalary" element={<GenerateSalary />} />
          <Route path="/AddSalary" element={<AddSalary />} />
          <Route path="/feedbackdisplay/:id" element={<UpdateFeedback />} />
          <Route path="/categoryhome" element={<CategoryHome />} />
          <Route path="/categoryadd" element={<CategoryAdd />} />
          <Route path="/categorydetails" element={<CategoryDetails />} />
          <Route path="/categorydetails/:id" element={<CategoryUpdate />} />
          <Route path="/inventoryDeatails/:Iid" element={<InventoryUpdate />} />
          <Route path="/inventoryReport" element={<InventoryReport />} />
          <Route path="/supportdisplay" element={<SupportDisplay />} />
          <Route path="/RequestSupportForm" element={<RequestSupportForm />} />
          <Route
            path="/supportdisplay/:id"
            element={<UpdateRequestSupport />}
          />
          <Route path="/userHomePage" element={<UserHome />} />
          <Route path="/viewrequests/:id" element={<UpdateRequests />} />
          <Route path="/ViewSalary/:id" element={<UpdateSalary />} />
          <Route path="/complaindisplay" element={<ComplainDisplay />} />
          <Route path="/AddComplainForm" element={<AddComplainForm />} />
          <Route path="/complaindisplay/:id" element={<UpdateComplain />} />
          <Route path="/AdminRegister" element={<Register />} />
          <Route path="/PlanManegment" element={<PackageManagement />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
