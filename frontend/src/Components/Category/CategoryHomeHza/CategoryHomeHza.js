import React from "react";
import CategoryNavHza from "../CategoryNavHza/CategoryNavHza";
import UserFooter from "../../UserHomePage/UserFooter";

function CategoryHomeHza() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-red-50">
      <CategoryNavHza />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
            Hazardous Waste Management
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Proper management of hazardous waste is crucial for protecting human health and the environment. Follow these steps to manage hazardous waste safely and effectively.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Step 1: Identification
              </h2>
              <p className="text-gray-600">
                Identify and categorize hazardous waste based on its properties and potential risks. Proper labeling and documentation are essential.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Step 2: Segregation
              </h2>
              <p className="text-gray-600">
                Separate hazardous waste from non-hazardous waste to prevent cross-contamination. Use clearly marked containers for different types of hazardous waste.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Step 3: Storage
              </h2>
              <p className="text-gray-600">
                Store hazardous waste in a secure, well-ventilated area with proper containment measures to prevent leaks or spills.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Step 4: Disposal
              </h2>
              <p className="text-gray-600">
                Follow local regulations for the disposal of hazardous waste. Use certified waste disposal services to ensure safe and compliant handling.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Step 5: Documentation
              </h2>
              <p className="text-gray-600">
                Maintain accurate records of hazardous waste management activities, including quantities, storage conditions, and disposal methods.
              </p>
            </div>
          </div>
        </div>
      </div>

      <UserFooter />
    </div>
  );
}

export default CategoryHomeHza;
