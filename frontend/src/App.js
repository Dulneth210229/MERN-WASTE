import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/AdminHome/AdminHome";
import AddRequest from "./Components/RequestService/AddRequest/AddRequest";
import ViewRequests from "./Components/RequestService/RequestDetails/Requests";
import Crmhome from "./Components/CustomerRelationship/CrmHome/Crmhome";
import Feedback from "./Components/CustomerRelationship/Feedback/Feedback";
import Complain from "./Components/CustomerRelationship/Complain/Complain";
import Support from "./Components/CustomerRelationship/Support/Support";

function App() {
  //java scripts

    return (
      //html
      <div>
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mainhome" element={<Home />} />
            <Route path="/requestservice" element={<AddRequest />} />
            <Route path="/viewrequests" element={<ViewRequests />} />
            <Route path="/crmHome" element={<Crmhome />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/complain" element={<Complain />} />
            <Route path="/support" element={<Support/>} />
          </Routes>
        </React.Fragment>
      </div>
  );
}

export default App;