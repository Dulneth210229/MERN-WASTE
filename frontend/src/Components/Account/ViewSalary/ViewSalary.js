import React, { useEffect, useState } from 'react';
import AccountNav from '../AccountNav/AccountNav';
import axios from "axios";
import Salary from '../Salary/Salary';


const AURL = "http://Localhost:5001/account";

const fetchSalary = async () =>{
  
  return await axios.get(AURL).then((res) => res.data);
}
function ViewSalary() {

const [account,setSalary] = useState();
 useEffect(() => {
   fetchSalary().then((data) => setSalary(data.account));

 },[])

 //create pdf function
 const ComponentsRef = useRef();
 const handlePrint = 

  return (
    <div>
      <AccountNav/>
      {/*<h1>View Salary</h1>*/}
       {/*get the salary details repetitively from the View salary.js*/}
      <div>
        {account && 
        account.map((account, i) => (
          <div key={i}>
            <Salary account={account}/>

</div>
        )
      )}
      </div>
    </div>
   
      
   
  )
}

export default ViewSalary;
