import React, { useEffect, useState, useRef } from 'react';
import AccountNav from '../AccountNav/AccountNav';
import axios from "axios";
import Salary from '../Salary/Salary';
import { useReactToPrint } from "react-to-print";

const AURL = "http://Localhost:5001/account";

const fetchSalary = async () => {
  return await axios.get(AURL).then((res) => res.data);
}

function ViewSalary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [account, setSalary] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Fetch salary data on component mount
  useEffect(() => {
    fetchSalary().then((data) => setSalary(data.account));
  }, []);

  // Create PDF function
  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: "Salary Report",
    onAfterPrint: () => alert("Salary report successfully downloaded!"),
  });

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
      setSuggestions(filteredSalary); // Update suggestions
    });
  };

  // Handle input change for search
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      fetchSalary().then((data) => {
        const filteredSalary = data.account.filter((account) =>
          Object.values(account).some((field) =>
            field.toString().toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
        setSuggestions(filteredSalary); // Update suggestions
      });
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }
  };

  return (
    <div>
      <AccountNav />

      {/* Search Input and Button */}
      <div className="flex justify-end mb-6 bg-sla bg-gray-100">
        <input
          onChange={handleInputChange}
          value={searchQuery}
          type="text"
          placeholder="Search salary"
          className="border border-gray-300 rounded p-2 w-64"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white py-2 px-4 rounded ml-2 hover:bg-green-600">
          Search
        </button>
      </div>

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute bg-white border border-gray-300 rounded mt-1 w-64 z-10">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => setSearchQuery(suggestion.name)}>
              {suggestion.name} {/* Replace 'name' with the appropriate property to display */}
            </div>
          ))}
        </div>
      )}

      {/* Salary Details */}
      <div ref={ComponentsRef}>
        {account && account.map((account, i) => (
          <div key={i}>
            <Salary account={account} />
          </div>
        ))}
      </div>

      {/* Download Report Button */}
      <button
        onClick={handlePrint}
        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 ml-2">
        Download Report
      </button>
    </div>
  );
}

export default ViewSalary;
