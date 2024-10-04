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
import EmployeeHome from "./Components/Employee/EmployeeHome/EmployeeHome";
import Employee from "./Components/Employee/Employee/Employee";
import Employees from "./Components/Employee/EmployeeDetails/Employees";
import AddEmployee from "./Components/Employee/AddEmployee/AddEmployee";
import UpdateEmployee from "./Components/Employee/UpdateEmployee/UpdateEmployee";
import EmployeeSchedules from "./Components/Employee/Employee Schedules/EmployeeSchedules";
import UpdateRequests from "./Components/RequestService/UpdateRequest/UpdateRequest";
import UpdateSalary from "./Components/Account/UpdateSalary/UpdateSalary";
import AddSalary from "./Components/Account/AddSalary/AddSalary";
import ComplainDisplay from "./Components/CustomerRelationship/ComplainDisplay_01/ComplainDisplay_01";
import AddComplainForm from "./Components/CustomerRelationship/AddComplainForm/AddComplainForm";
import UpdateComplain from "./Components/CustomerRelationship/UpdateComplain/UpdateComplain";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Components/InventoryReg/Register";
import PackageManagement from "./Components/PlanManegment/PackageManagement";
import CatHome from "./Components/Category/CatHome/CatHome";
import CategoryHomeOr from "./Components/Category/CategoryHomeOr/CategoryHomeOr";
import CategoryAddOr from "./Components/Category/CategoryAddOr/CategoryAddOr";
import CategoryDetailsOr from "./Components/Category/CategoryDetailsOr/CategoryDetailsOr";
import CategoryUpdateOr from "./Components/Category/CategoryUpdateOr/CategoryUpdateOr";
import CategoryHomeHza from "./Components/Category/CategoryHomeHza/CategoryHomeHza";
import CategoryAddHza from "./Components/Category/CategoryAddHza/CategoryAddHza";
import CategoryDetailsHza from "./Components/Category/CategoryDetailsHza/CategoryDetailsHza";
import CategoryUpdateHza from "./Components/Category/CategoryUpdateHza/CategoryUpdateHza";
import FirstHome from "./Components/FirstHome/FirstHome";
import Login from "./Components/Login/Login";
import CrmReport from "./Components/CustomerRelationship/CrmReport/CrmReport";
import SendReport from "./Components/Inventory/SendReport/SendReport";
import AddNewOrder from "./Components/Order/AddOrder/AddNewOrder";
import OrderDtails from "./Components/Order/OrderDtails/OrderDtails";
import UpdateOrder from "./Components/Order/UpdateOrder/UpdateOrder";
import PlanManagementPayment from "./Components/PlanManegmentPayment/PlanManagementPayment";
import InventoryReg from "./Components/InventoryReg/Register";
import RequestDetailsUser from "./Components/RequestService/RequestDetailsUser/RequestDetailsUser";
import RequestStaff from "./Components/RequestService/RequestStaff/requestStaff";

// Gawrawa
import WCMHome from './Components/Home/WCMHome/WCMHome';
import WCMAdmin_Home from './Components/Home/WCMAdmin_Home/WCMAdmin_Home';
import WCMDriver_Onboarding from "./Components/Home/WCMDriver_Home/WCMDriver_Onboarding";
import WCMUser_Details from './Components/WCMAdmin_Comp/WCMAdmin_User/WCMUser_Details';
import WCMAdmin_Details from './Components/WCMAdmin_Comp/WCMAdmin_Admin/WCMAdmin_Details';
import WCMDriver_Details from './Components/WCMAdmin_Comp/WCMAdmin_Driver/WCMDriver_Details';
import WCMBin_Details from './Components/WCMAdmin_Comp/WCMAdmin_Bin/WCMBin_Details';
import WCMBin_Add from './Components/WCMAdmin_Comp/WCMAdmin_Bin/WCMBin_Add';
import WCMUser_Register from './Components/WCMUser_Comp/WCMUser_Register';
import WCMDriver_Register from './Components/WCMDriver_Comp/WCMDriver_Register';
import WCMDriver_Home from "./Components/WCMDriver_Comp/WCMDriver_Home";
import WCMDriver_Login from "./Components/WCMDriver_Comp/WCMDriver_Login";
import WCMUser_Login from "./Components/WCMUser_Comp/WCMUser_Login";
import WCMUser_Onboarding from "./Components/Home/WCMUser_Home/WCMUser_Onboarding";
import WCMAdmin_Login from "./Components/WCMAdmin_Comp/WCMAdmin_Login";
import WCMAssign_Work from "./Components/WCMAdmin_Comp/WCMAssign_Work";



import CreditDebit from "./Components/Account/CreditDebit/CreditDebit";
import ReportGeneration from "./Components/Account/RepotGeneration/ReportGeneration";

function App() {
  //java scripts
  return (
    //html
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/adminHome" element={<Home />} />
          <Route path="/" element={<FirstHome />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employeehome" element={<EmployeeHome />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/employeedetails" element={<Employees />} />
          <Route path="/employeedetails/:id" element={<UpdateEmployee />} />
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
          <Route path="/catHome" element={<CatHome />} />
          <Route path="/categoryhomeOr" element={<CategoryHomeOr />} />
          <Route path="/categoryaddOr" element={<CategoryAddOr />} />
          <Route path="/categorydetailsOr" element={<CategoryDetailsOr />} />
          <Route path="/categorydetailsOr/:id" element={<CategoryUpdateOr />} />
          <Route path="/categoryhomeHza" element={<CategoryHomeHza />} />
          <Route path="/categoryaddHza" element={<CategoryAddHza />} />
          <Route path="/categorydetailsHza" element={<CategoryDetailsHza />} />
          <Route
            path="/categorydetailsHza/:id"
            element={<CategoryUpdateHza />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/crmReport" element={<CrmReport />} />
          <Route path="/sendreport" element={<SendReport />} />
          <Route path="/addorder" element={<AddNewOrder />} />
          <Route path="/orderDetails" element={<OrderDtails />} />
          <Route path="/updateOrder/:Oid" element={<UpdateOrder />} />
          <Route
            path="/PlanManagementPayment"
            element={<PlanManagementPayment />}
          />
          <Route path="/StaffRegister" element={<InventoryReg />} />
          <Route path="/requestDetailsUser" element={<RequestDetailsUser />} />
          <Route path="/requestStaff" element={<RequestStaff />} />
      

          {/* Gawrawa */}
          <Route path="/WCMHome" element={<WCMHome />} />
        <Route path="/WCMAdmin_Home" element={<WCMAdmin_Home />} />
        
        <Route path="/WCMDriver_Onboarding" element={<WCMDriver_Onboarding />} />
        <Route path="/WCMUser_Details" element={<WCMUser_Details/>} />
        <Route path="/WCMAdmin_Details" element={<WCMAdmin_Details/>}/>
        <Route path="/WCMDriver_Details" element={<WCMDriver_Details/>}/>
        <Route path="/WCMBin_Details" element={<WCMBin_Details/>}/>
        <Route path="/WCMBin_Add" element={<WCMBin_Add/>}/>
        <Route path="/WCMUser_Register" element={<WCMUser_Register/>}/>
        <Route path="/WCMDriver_Register" element={<WCMDriver_Register/>}/>
        <Route path="/WCMDriver_Home" element={<WCMDriver_Home/>} />
        <Route path="/WCMDriver_Login" element={<WCMDriver_Login/> } />
        <Route path="/WCMUser_Login" element={<WCMUser_Login/>} />
        
        <Route path="/WCMUser_Onboarding" element={<WCMUser_Onboarding/>}/>
        <Route path="/WCMAdmin_Login" element={<WCMAdmin_Login/>} />
        <Route path="/WCMAssign_Work" element={<WCMAssign_Work/>}/>


        <Route path="/CreditDebit" element={<CreditDebit />}/>
        <Route path="/ReportGeneration" element={<ReportGeneration />}/>

       


        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
