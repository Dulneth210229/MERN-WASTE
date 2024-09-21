import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CategoryM(props) {
  const {_id, WasteType, Quantity, DateOfCollection, Location, TransportMethod, Notes} = props.catego;

  const history = useNavigate();

  const deleteHandler = async () => {
    await axios.delete(`http://Localhost:5001/category/${_id}`)
      .then(res => res.data)
      .then(() => history("/categorydetails"));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Details</h1>
      
      <div className="space-y-2 mb-4">
        <div>
          <span className="font-semibold text-gray-600">ID:</span>
          <span className="ml-2 text-gray-800">{_id}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-600">Waste Type:</span>
          <span className="ml-2 text-gray-800">{WasteType}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-600">Quantity:</span>
          <span className="ml-2 text-gray-800">{Quantity}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-600">Date Of Collection:</span>
          <span className="ml-2 text-gray-800">{DateOfCollection}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-600">Location:</span>
          <span className="ml-2 text-gray-800">{Location}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-600">Transport Method:</span>
          <span className="ml-2 text-gray-800">{TransportMethod}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-600">Notes:</span>
          <span className="ml-2 text-gray-800">{Notes}</span>
        </div>
      </div>
      
      <div className="flex space-x-4">
        <Link 
          to={`/categorydetails/${_id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Update
        </Link>
        <button
          onClick={deleteHandler}
          className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CategoryM;
