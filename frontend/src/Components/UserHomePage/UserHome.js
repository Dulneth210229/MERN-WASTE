import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import UserHomeHeader from "./UserHomeHeader";
import homeimg01 from "./ImgTransform/img/home01.svg";
import homeimg02 from "./ImgTransform/img/home02.svg";
import Footer from "./UserFooter.js";

function UserHome() {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch subscription plans from the backend
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get("http://localhost:5001/plan");
        setPlans(response.data.plans); // Assuming response contains `plans` array
      } catch (err) {
        console.error("Error fetching plans", err);
      }
    };
    fetchPlans();
  }, []);

  // Handle subscribe button click
  const handleSubscribe = (packageName, packagePrice) => {
    // Navigate to /PlanManagementPayment and pass the selected plan details
    navigate("/PlanManagementPayment", {
      state: { packageName, packagePrice },
    });
  };

  return (
    <div className="">
      <UserHomeHeader />
      <div></div>

      <div></div>
      {/* Image Section */}
      <div className="mt-16 ">
        <div className="flex flex-row ">
          <div className="w-1/2">
            <img src={homeimg01} alt="homeimg01" className="" />
          </div>
          <div className="w-1/2 b mt-36">
            <h2 className="text-center font-bold font-serif text-slate-600 text-6xl">
              Waste is a resource in the wrong place
            </h2>
            <p className="text-justify p-5 font-medium text-slate-600 italic">
              "Waste, if managed correctly, can become a valuable resource
              rather than just discarded material. Recycling, composting, and
              repurposing waste can turn what is considered trash into something
              useful, such as renewable energy or new products. This approach
              reduces landfill usage and conserves natural resources.
              Encouraging users to think of waste as a misplaced resource helps
              promote sustainable practices. By sorting and disposing of waste
              properly, individuals can contribute to transforming waste into
              new opportunities"
            </p>
          </div>
        </div>
      </div>

      {/* Subscription Packages Section */}
      <div className="my-20">
        <h2 className="text-center font-bold font-serif text-slate-600 text-5xl mb-10">
          Choose Your Subscription Plan
        </h2>

        {/* Displaying plans dynamically */}
        <div className="flex justify-center space-x-10 mx-2">
          {plans.length > 0 ? (
            plans.map((plan) => (
              <div
                key={plan._id}
                className={`w-1/3 bg-gradient-to-r from-cyan-100 to-lime-100 shadow-lg rounded-lg p-8 border ${
                  plan.packageName === "Monthly"
                    ? "border-green-500"
                    : "border-gray-300"
                } hover:shadow-2xl transition-shadow duration-300`}
              >
                <h3
                  className={`text-center text-2xl font-bold ${
                    plan.packageName === "Monthly"
                      ? "text-green-600"
                      : "text-slate-700"
                  }`}
                >
                  {plan.packageName}
                </h3>
                <p className="text-center text-lg mt-4 text-gray-600">
                  ${plan.packagePrice}
                </p>
                <ul className="mt-4 text-gray-600 text-center">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="text-center mt-6">
                  <button
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    onClick={() =>
                      handleSubscribe(plan.packageName, plan.packagePrice)
                    }
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-lg text-gray-600">
              No subscription plans available
            </p>
          )}
        </div>
      </div>

      {/* Second Image Section */}
      <div className=" ">
        <div className="flex flex-row ">
          <div className="w-1/2 b mt-36">
            <h2 className="text-center font-bold font-serif text-slate-600 text-6xl">
              A clean city starts with you
            </h2>
            <p className="text-justify p-5 font-medium text-slate-600 italic">
              "Every citizen has a role to play in keeping their city clean and
              green. Proper waste disposal, recycling, and taking small daily
              actions can collectively make a significant difference. This
              phrase empowers individuals to take responsibility for their
              environment, fostering a sense of ownership. When residents
              actively participate in keeping their surroundings tidy, it leads
              to a healthier and more beautiful community. It also reduces
              pollution, prevents diseases, and enhances overall quality of
              life. Your actions today can inspire others and create a ripple
              effect towards a cleaner city"
            </p>
          </div>
          <div className="w-1/2">
            <img src={homeimg02} alt="homeimg02" className="" />
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default UserHome;
