import React from "react";
import CategoryNavOr from "../CategoryNavOr/CategoryNavOr";
import UserFooter from "../../UserHomePage/UserFooter";

function CategoryHomeOr() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-blue-50">
      <CategoryNavOr />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
            Recyclable Waste Management
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Proper management and separation of recyclable waste are crucial for effective recycling. Follow these steps to ensure that your recyclable waste is properly handled and processed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Step 1: Segregation
              </h2>
              <p className="text-gray-600">
                Separate recyclable materials from general waste. Common recyclables include paper, cardboard, glass, metal, and certain plastics. Use clearly labeled bins for different types of recyclables.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Step 2: Cleaning
              </h2>
              <p className="text-gray-600">
                Rinse out food and drink containers before placing them in the recycling bin. Contaminants can interfere with the recycling process and reduce the quality of recycled materials.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Step 3: Sorting
              </h2>
              <p className="text-gray-600">
                Sort recyclable materials according to local recycling guidelines. This may include separating paper from plastics or glass from metals. Follow local regulations to ensure proper sorting.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Step 4: Storage
              </h2>
              <p className="text-gray-600">
                Store recyclables in a clean, dry place to prevent contamination and deterioration. Use bins or containers that are suitable for each type of recyclable material.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Step 5: Collection & Disposal
              </h2>
              <p className="text-gray-600">
                Ensure timely collection and proper disposal of recyclables. Contact local waste management services to arrange for pickup or drop-off at designated recycling centers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <UserFooter />
    </div>
  );
}

export default CategoryHomeOr;
