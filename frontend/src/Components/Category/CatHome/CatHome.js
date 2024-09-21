import React from "react";
import CategoryHomeNav from "../CategoryHomeNav/CategoryHomeNav";
import UserFooter from "../../UserHomePage/UserFooter";
import { FaRecycle, FaTrash, FaLeaf, FaHandHoldingHeart } from "react-icons/fa";
import UserHomeHeader from "../../UserHomePage/UserHomeHeader";

function CatHome() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <UserHomeHeader />
      <CategoryHomeNav />

      {/* Hero Section */}
      <section className="bg-green-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Waste Management: A Step Towards a Sustainable Future
          </h1>
          <p className="text-lg text-gray-600">
            Proper waste management is critical to reducing the negative impact
            on the environment and human health. Let's work together to reduce,
            reuse, and recycle for a greener tomorrow.
          </p>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-sky-100 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <FaRecycle className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Recycling</h3>
            <p className="text-gray-600">
              Recycling reduces the need for raw materials and saves energy. Be
              part of the recycling revolution!
            </p>
          </div>

          {/* Card 2 */}
          <div className=" shadow-md rounded-lg p-6 text-center hover:shadow-lg transition bg-sky-100">
            <FaTrash className="text-red-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Waste Reduction
            </h3>
            <p className="text-gray-600">
              Reducing waste generation is the first step towards effective
              waste management. Every small step counts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-sky-100 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <FaLeaf className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Composting</h3>
            <p className="text-gray-600">
              Composting organic waste helps in creating nutrient-rich soil
              while reducing landfill waste.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FaHandHoldingHeart className="text-blue-600 text-6xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Take Action Now!
          </h2>
          <p
            className="text-lg text-gray-600 mb
          -6"
          >
            Join us in our mission to create a cleaner, greener planet. Every
            effort, big or small, makes a difference.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition mt-6">
            Learn How You Can Help
          </button>
        </div>
      </section>

      {/* Footer */}
      <UserFooter />
    </div>
  );
}

export default CatHome;
