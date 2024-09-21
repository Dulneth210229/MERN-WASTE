import React, { useEffect, useState, useRef } from "react";
import CategoryNav from "../CategoryNav/CategoryNav";
import axios from "axios";
import CategoryM from "../CategoryM/CategoryM";
import { useReactToPrint } from "react-to-print";

const URL = "http://Localhost:5001/category";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function CategoryDetails() {
  const [category, setCategoryDetails] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setCategoryDetails(data.category));
  }, []);

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: "Category Report",
    onAfterPrint: () => alert("Users Report Successfully Downloaded!"),
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredCategorys = data.category.filter((category) =>
        Object.values(category).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setCategoryDetails(filteredCategorys);
      setNoResults(filteredCategorys.length === 0);
    });
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-0">
      <div className="w-full">
      <CategoryNav />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mt-0 mb-6">
        Category Details Display Page
      </h1>

      <div className="mb-6 flex space-x-4">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Search Category Details"
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Search
        </button>
        <button
          onClick={handlePrint}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Download Report
        </button>
      </div>

      {noResults ? (
        <p className="text-red-500">No Category Found</p>
      ) : (
        <div ref={ComponentsRef} className="w-full max-w-4xl">
          {category &&
            category.map((catego, i) => (
              <div key={i} className="mb-4 p-4 bg-white shadow-md rounded-lg">
                <CategoryM catego={catego} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default CategoryDetails;
