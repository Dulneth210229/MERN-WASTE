import React, { useEffect, useState, useRef } from "react";
//import React from "react";
import CategoryNav from "../CategoryNav/CategoryNav";
import axios from "axios";
import CategoryMHza from "../CategoryMHza/CategoryMHza";
import { useReactToPrint } from "react-to-print";


const URL = "http://Localhost:5001/category";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function CategoryDetailsHza() {
  const [category, setCategoryDetailsHza] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setCategoryDetailsHza(data.category));
  }, []);

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,

    DocumentTitle:"Category Report",
    onafterprint: ()=>alert("Users Report Successfully Download !"),

  });

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) =>{
      const filteredCategorys = data.category.filter((category) =>
        Object.values(category).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
      setCategoryDetailsHza(filteredCategorys);
      setNoResults(filteredCategorys.length === 0);
    });
  }


  return (
    <div>
      <CategoryNav />
      <h1>Category Details Display Page</h1>

      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        name="search"
        placeholder="Search Categoty Details"
        ></input>

        <button onClick={handleSearch}>Search</button>
        <button onClick={handlePrint}>Download Report</button>

        {noResults ? (
          <div>
              <p>No Category Found</p>
          </div>
        ): (

      <div ref={ComponentsRef}>
        {category &&
          category.map((catego, i) => (
            <div key={i}>
              <CategoryMHza catego={catego} />
            </div>
          ))}
      </div>
      )}
     
    </div>
  );
}

export default CategoryDetailsHza;
