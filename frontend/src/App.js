import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/AdminHome/AdminHome";
import AddRequest from "./Components/RequestService/AddRequest/AddRequest";
import ViewRequests from "./Components/RequestService/RequestDetails/Requests";
import AnnualPaymentPlan from "./Components/PaymentPlan/AnnualPaymentPlan/AnnualPaymentPlan";
import MomthlyPaymentPlan from "./Components/PaymentPlan/MomthlyPaymentPlan/MomthlyPaymentPlan";
import WeeklyPaymentPlan from "./Components/PaymentPlan/WeeklyPaymentPlan/WeeklyPaymentPlan";



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

            <Route path="/annualpaymentplan" element={<AnnualPaymentPlan />} />
            <Route path="/momthlypaymentplan" element={<MomthlyPaymentPlan />} />
            <Route path="/weeklypaymentplan" element={<WeeklyPaymentPlan />} />
            
          </Routes>
        </React.Fragment>
      </div>
  );
}

export default App;