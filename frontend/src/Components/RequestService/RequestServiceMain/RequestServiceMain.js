import React from "react";
import RequestNav from "../RequestNav/RequestNav";
import { Link } from "react-router-dom";
import containerImage from "../reqImages/container.jpg";
import cleanerImage from "../reqImages/cleaner.jpg";
import bulkyImage from "../reqImages/bulky2.jpg";
import UserFooter from "../../UserHomePage/UserFooter";
import UserHomeHeader from "../../UserHomePage/UserHomeHeader";
// import axios from 'axios'
// import { useEffect, useState } from 'react'

function RequestServiceMain() {
  // const [requests, setRequests] = useState([]);

  // useEffect(() => {
  //   // Fetch request details from the backend
  //   const fetchRequests = async () => {
  //     try {
  //       const response = await axios.get('/api/requests'); // Adjust API path as per your backend setup
  //       setRequests(response.data);
  //     } catch (error) {
  //       console.error('Error fetching requests:', error);
  //     }
  //   };
  //   fetchRequests();
  // }, []);

  return (
    <div>
      <UserHomeHeader />
      <div className="min-h-screen bg-gray-100 pt-1 pr-1">
        <header className="mb-10">
          <div className="flex justify-between items-center mt-2">
            <h1 className="text-4xl font-bold text-gray-800 flex-grow text-center">
              Request a Special Service
            </h1>
            <div className="pr-96">
              <RequestNav />
            </div>
            <Link to="/addrequest">
              <button className="px-6 py-2 mr-44 bg-green-700 text-white rounded-full shadow hover:bg-green-800 transition duration-200">
                Add New Request
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 pt-8 pl-60 pr-60 gap-8">
            <Link to={`/addrequest`}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-green-600 text-center">
                  Container
                </h1>
                <div className="flex flex-col items-center w-full">
                  <img
                    src={containerImage}
                    alt="container"
                    className="max-w-4xl h-auto mb-4"
                  ></img>
                  <p className="text-lg text-green-800 text-justify mb-2">
                    Discover the convenience of renting containers for your
                    storage needs. Whether you're looking for temporary storage
                    during a move, extra space for seasonal items, or a secure
                    solution for business inventory, our containers are designed
                    to meet your requirements. With various sizes and easy
                    rental options, you can enjoy hassle-free storage without
                    the long-term commitment. Experience reliable, secure, and
                    affordable container rental services tailored to fit your
                    lifestyle and business demands.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 pt-8 pl-60 pr-60 gap-8">
            <Link to={`/addrequest`}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-green-600 text-center">
                  Cleaner
                </h1>
                <div className="flex flex-col items-center w-full">
                  <img
                    src={cleanerImage}
                    alt="container"
                    className="max-w-4xl h-auto mb-4"
                  ></img>
                  <p className="text-lg text-green-800 text-justify mb-2">
                    Keep your home or office spotless with our expert cleaning
                    services. Whether it's a one-time deep clean, regular
                    maintenance, or specialized cleaning for events, our team of
                    professional cleaners is here to help. We offer flexible
                    scheduling, eco-friendly cleaning solutions, and a
                    commitment to making your space shine. Enjoy the peace of
                    mind that comes with a clean, fresh environment, tailored to
                    your specific needs.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 pt-8 pl-60 pr-60 gap-8">
            <Link to={`/addrequest`}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-green-600 text-center">
                  Pickup a Bulk
                </h1>
                <div className="flex flex-col items-center w-full">
                  <img
                    src={bulkyImage}
                    alt="container"
                    className="max-w-4xl h-auto mb-4"
                  ></img>
                  <p className="text-lg text-green-800 text-justify mb-2">
                    Need to get rid of oversized furniture, appliances, or other
                    bulky items? Our Bulky Pickup service is designed for
                    hassle-free removal of large, unwanted items from your home
                    or business. Simply schedule a pickup, and our team will
                    handle the heavy lifting. Whether you're decluttering,
                    renovating, or just clearing space, we make it easy and
                    eco-friendly to dispose of bulky waste responsibly.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center mt-10">
            <Link to="/addrequest">
              <button className="px-6 py-2 mb-8 bg-green-700 text-white rounded-full shadow hover:bg-green-800 transition duration-200">
                Add New Request
              </button>
            </Link>
          </div>
        </header>

        {/* <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {requests.length > 0 ? (
          requests.map((request) => (
            <div key={request._id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={request.photoUrl || 'https://via.placeholder.com/150'} // Use placeholder if no photo
                alt={request.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800">{request.title}</h2>
                <p className="mt-2 text-gray-600">{request.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No special requests available.</p>
        )}
      </section> */}
      </div>
      <UserFooter />
    </div>
  );
}

export default RequestServiceMain;
