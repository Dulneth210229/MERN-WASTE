import React, { useEffect, useState } from 'react';
//import React from "react";
import CategoryNav from "../CategoryNav/CategoryNav";
import axios from "axios";
import CategoryM from '../CategoryM/CategoryM';

const URL = "http://Localhost:5001/category";

const fetchHandler = async () =>{
  return await axios.get(URL).then((res) => res.data);
}

function CategoryDetails() {

  const [category, setCategoryDetails] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setCategoryDetails(data.category));
  },[])

  return (
    <div>
      <CategoryNav />
      <h1>Category Details Display Page</h1>
      <div>
        {category && category.map((catego, i) =>(
          <div key={i}>
            <CategoryM catego={catego}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryDetails
