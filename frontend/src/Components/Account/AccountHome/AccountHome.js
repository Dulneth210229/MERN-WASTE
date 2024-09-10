import React from 'react';
import AccountNav from '../AccountNav/AccountNav';
import './AccountHome.css';
import {Link} from "react-router-dom";



function AccountHome() {
  return (
    <div className="account-home">

    <AccountNav/>

    <div className="salary-header">
        <h1>Salary</h1>
      </div>
      
      <div className="salary-buttons">
        <button className="salary-button"><Link to="/AddSalary" >Add Salary</Link></button>
        <button className="salary-button"><Link to="/ViewSalary" >View Salary</Link></button>
        <button className="salary-button"><Link to="/GenerateSalary">Generate Salary</Link></button>
      </div>
    </div>
   
  )
}

export default AccountHome
