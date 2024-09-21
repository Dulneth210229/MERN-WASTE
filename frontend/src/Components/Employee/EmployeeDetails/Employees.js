import React,{ useState,useEffect } from 'react';
import { useRef } from 'react';
import EmployeeNav from '../EmployeeNav/EmployeeNav';
import axios from 'axios';
import Employee from '../Employee/Employee';
import { Link } from "react-router-dom";
import {useReactToPrint} from "react-to-print";


const EURL = "http://Localhost:5001/Employee";

const fetchHandler = async()=>{
    return await axios.get(EURL).then((res) => res.data);
}

function Employees() {
const [employees, setEmployees]=useState();
useEffect(()=>{
    fetchHandler().then((data)=> setEmployees(data.employees));
},[])

const ComponentsRef = useRef();
const handlePrint = useReactToPrint({
  content: () => ComponentsRef.current,
  DocumentTitle:"Employees Report",
  onafterprint:()=>alert ("Employee report successfully download!"),

});

const [searchQuery, setSearchQuery]=useState("");
const [noResults, setNoResults]=useState(false);

const handleSearch =()=>{
  fetchHandler().then((data)=>{
    const filteredUsers = data.users.filter((user)=>
      Object.values(user).some((field)=>
    
      field.toString().toLowerCase().includes(searchQuery.toLowerCase())
      
      ))
      setEmployees(filteredUsers);
      setNoResults(filteredUsers.length === 0);
  });
};



return (
    <div>
        <EmployeeNav/>
        <div className="text-center mt-16">
        <h2 className="font-bold font-serif text-slate-600 text-5xl">
          Employee Details 
        </h2>
        <p className="mt-4 text-gray-600 text-xl italic">
          Add New Employee, Update Employee Details, Remove Employee in the system here.
        </p>
        <div className="text-center mt-16">
          <Link to="/addemployee">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase w-72 over:opacity-95  ">
              Add New Employee
            </button>
          </Link>
          </div>

      </div>

      
      <br></br>
      <input onChange={(e)=> setSearchQuery(e.target.value)} 
      type ="text"
      name="search"
      placeholder='Search Employees Details'
      ></input>

      <button onClick={handleSearch}>Search </button>
      <hr className="border-2" />

<div className="mt-10">
  <table className="border-2 mx-auto">
    <tr className="bg-green-200 ">
      <th className="border-2 p-2 w-48 border-green-500">Employee Id</th>
      <th className="border-2 p-2 w-48  border-green-500">
        Employee First Name
      </th>
      <th className="border-2 p-2 w-48 border-green-500">
        Employee Last Name
      </th>
      <th className="border-2 p-2 w-24 border-green-500">Employee Catogory</th>
      <th className="border-2 p-2 w-48 border-green-500">
      Employee Address
      </th>
      <th className="border-2 p-2 w-52 border-green-500">Employee Email</th>
      <th className="border-2 p-2 w-52 border-green-500">Employee Phone</th>
      <th className="border-2 p-2 w-52 border-green-500">Actions</th>
    </tr>
  </table>
</div>
      {noResults?(
        <div>
          <p>No Employee Found</p>
          </div>
      ):(

      <div ref={ComponentsRef}>
        {employees && employees.map((employee, i)=>(
            <div key={i}>
                <Employee employee={employee}/>
            </div>
        ))}
      </div>
      )}
      <br></br>
      <br></br>
    <button onClick={handlePrint}>Download Report </button>
    </div>
  );
};

export default Employees;
