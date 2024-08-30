import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/AdminHome/AdminHome";
import AddRequest from "./Components/RequestService/AddRequest/AddRequest";
import ViewRequests from "./Components/RequestService/RequestDetails/Requests";

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
          </Routes>
        </React.Fragment>
      </div>
  );
}

export default App;