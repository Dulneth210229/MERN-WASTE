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


  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [account,setSalary] = useState();
  // Fetch salary data on component mount
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

//search function

  // Search function
  const handleSearch = () => {
    fetchSalary().then((data) => {
      const filteredSalary = data.account.filter((account) =>
        Object.values(account).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setSalary(filteredSalary);
      setNoResults(filteredSalary.length === 0);
    });
  };

  // Clear search function
  const handleClearSearch = () => {
    setSearchQuery(''); // Clear search query
    fetchSalary().then((data) => {
      setSalary(data.account); // Reset salary to original state
      setNoResults(false);
    });
  };


  return (

    <div>

<AccountNav/>
    {/* Search Input and Buttons */}
    <div className="mb-6">
                    <input
                        onChange={(e) => setSearchQuery(e.target.value)}
                        type="text"
                        placeholder="Search salary"
                        className="border border-gray-300 rounded p-2 w-64"
            />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 text-white py-2 px-4 rounded ml-2">
                        Search
                    </button>
                    <button
                        onClick={handleClearSearch}
                        className="bg-gray-500 text-white py-2 px-4 rounded ml-2">
                        Clear Search
                    </button>

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


    </div>
   
)   
}

export default ViewSalary;
