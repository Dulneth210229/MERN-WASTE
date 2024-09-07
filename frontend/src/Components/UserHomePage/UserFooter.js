import React from "react";
import LOGO from "./ImgTransform/img/freshColombo.svg";
const UserFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <img src={LOGO} alt="Logo" className="h-32 w-36" />

            <p className="mt-2 text-gray-500">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            {/* Social Media Icons */}
            <div className="mt-4 flex space-x-4">
              <p className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-facebook-f"></i>
              </p>
              <p className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-instagram"></i>
              </p>
              <p className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-twitter"></i>
              </p>
              <p className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-github"></i>
              </p>
              <p className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-youtube"></i>
              </p>
            </div>
          </div>

          {/* Middle Sections */}
          <div className="w-full lg:w-2/3 flex flex-wrap justify-between">
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-gray-900 font-bold">Solutions</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <p className="text-gray-500 hover:text-gray-900">Marketing</p>
                </li>
                <li>
                  <p className="text-gray-500 hover:text-gray-900">Analytics</p>
                </li>
                <li>
                  <p className="text-gray-500 hover:text-gray-900">Commerce</p>
                </li>
                <li>
                  <p className="text-gray-500 hover:text-gray-900">Insights</p>
                </li>
              </ul>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-gray-900 font-bold">Support</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <p className="text-gray-500 hover:text-gray-900">Pricing</p>
                </li>
                <li>
                  <p className="text-gray-500 hover:text-gray-900">
                    Documentation
                  </p>
                </li>
                <li>
                  <p className="text-gray-500 hover:text-gray-900">Guides</p>
                </li>
                <li>
                  <p className="text-gray-500 hover:text-gray-900">
                    API Status
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-gray-900 font-bold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <p className="text-gray-500 hover:text-gray-900">About</p>
                </li>
                <li>
                  <p className="text-gray-500 hover:text-gray-900">Blog</p>
                </li>
                <li>
                  <p className="text-gray-500 hover:text-gray-900">Jobs</p>
                </li>
                <li>
                  <p className="text-gray-500 hover:text-gray-900">Press</p>
                </li>
                <li>
                  <p className="text-gray-500 hover:text-gray-900">Partners</p>
                </li>
              </ul>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-gray-900 font-bold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <p className="text-gray-500 hover:text-gray-900">Claim</p>
                </li>
                <li>
                  <p className="text-gray-500 hover:text-gray-900">Privacy</p>
                </li>
                <li>
                  <p className="text-gray-500 hover:text-gray-900">Terms</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500">
            &copy; 2024 Fresh Colombo, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;
