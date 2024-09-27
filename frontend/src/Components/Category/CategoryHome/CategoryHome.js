import React from "react";
import CategoryNav from "../CategoryNav/CategoryNav";
import UserFooter from "../../UserHomePage/UserFooter";

function CategoryHome() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-green-50">
      <CategoryNav />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
            Organic Waste Management
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Proper management of organic waste can help reduce environmental pollution and improve soil fertility. Here's how you can manage organic waste efficiently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Step 1: Segregation
              </h2>
              <p className="text-gray-600">
                Segregate organic waste at the source to avoid contamination with non-organic materials. Use separate bins for organic and inorganic waste.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Step 2: Composting
              </h2>
              <p className="text-gray-600">
                Organic waste can be composted to produce nutrient-rich compost for soil. Set up a composting system to turn waste into valuable resources.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Step 3: Collection & Transportation
              </h2>
              <p className="text-gray-600">
                Ensure timely collection and transportation of organic waste to composting facilities or waste processing centers to avoid decomposition and odors.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Step 4: Anaerobic Digestion
              </h2>
              <p className="text-gray-600">
                Use anaerobic digestion systems to convert organic waste into biogas, a renewable source of energy. This method helps in reducing methane emissions.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Step 5: Soil Enrichment
              </h2>
              <p className="text-gray-600">
                Apply the compost produced from organic waste to enrich the soil, promoting sustainable agricultural practices and reducing the need for chemical fertilizers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <UserFooter />
    </div>
  );
}

export default CategoryHome;
