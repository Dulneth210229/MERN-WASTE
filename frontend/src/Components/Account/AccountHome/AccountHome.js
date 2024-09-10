import React from 'react';
import AccountNav from '../AccountNav/AccountNav';

function AccountHome() {
  return (
    <div className="main-buttons"> 

    <AccountNav/>

    <button>Add Salary</button>
    <button>View Salary</button>
    <button>Generate Salary</button>
    </div>
      
   
  )
}

export default AccountHome
