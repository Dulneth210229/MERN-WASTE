import React, { useEffect, useState, useRef } from 'react';
//import React from "react";
import CategoryNav from "../CategoryNav/CategoryNav";
import axios from "axios";
import CategoryM from '../CategoryM/CategoryM'
import {useReactToPrint} from "react-to-print";

const URL = "http://Localhost:5001/category";

const fetchHandler = async () =>{
  return await axios.get(URL).then((res) => res.data);
}

function CategoryDetails() {

  const [category, setCategoryDetails] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setCategoryDetails(data.category));
  },[])

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle:"Category Report",
    onafterprint: ()=>alert("Users Report Successfully Download !"),

  })

  return (
    <div>
      <CategoryNav />
      <h1>Category Details Display Page</h1>
      <div ref={ComponentsRef}>
        {category && category.map((catego, i) =>(
          <div key={i}>
            <CategoryM catego={catego}/>
            </div>
        ))}
      </div>
      <button onClick={handlePrint}>Download Report</button>
    </div>
  )
}

export default CategoryDetails
