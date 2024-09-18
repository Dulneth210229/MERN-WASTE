import React, { useEffect, useState ,useRef} from 'react';
import AccountNav from '../AccountNav/AccountNav';
import axios from "axios";
import Salary from '../Salary/Salary';
import {useReactToPrint}from "react-to-print";



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
  const handlePrint = useReactToPrint({
  content:() => ComponentsRef.current,
  DocumentTitle:"Salary Report", //document name
  onafterprint:()=> alert("Salary report successfully Downloard!"),
});




  return (

    <div>

<AccountNav/>
   
      {/*<h1>View Salary</h1>*/}
       {/*get the salary details repetitively from the View salary.js*/}
      <div ref={ComponentsRef}>

        {account && 
        account.map((account, i) => (
          <div key={i}>
            <Salary account={account}/>

</div>
        )
      )}
      </div>
      <button onClick={handlePrint }className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 ml-2">Download Report</button>
    </div>
   
)   
}

export default ViewSalary;
