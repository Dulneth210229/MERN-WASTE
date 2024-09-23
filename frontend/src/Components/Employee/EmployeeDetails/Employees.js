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
            <button className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72 over:opacity-95  ">
              Add New Employee
            </button>
          </Link>
          </div>
          <div className="mb-6 flex space-x-4">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Search Employee Details"
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleSearch}
          className="bg-lime-700 text-white p-3 rounded-lg uppercase w-72 over:opacity-95  "
        >
          Search
        </button>
        </div>


      </div>

      
      <br></br>
      
      {noResults?(
        <div>
          <p>No Employee Found</p>
          </div>
      ):(

      <div ref={ComponentsRef} className='w-full max-w-4xl'>
        {employees && employees.map((employee, i)=>(
            <div key={i}className="mb-4 p-4 bg-white shadow-md rounded-lg" >
                <Employee employee={employee}/>
            </div>
        ))}
      </div>
      )}
      <br></br>
      <br></br>
    <button onClick={handlePrint}className="bg-lime-700 text-white p-3 rounded-lg uppercase w-72 over:opacity-95  " >Download Report </button>
    </div>
  );
};

export default Employees;
