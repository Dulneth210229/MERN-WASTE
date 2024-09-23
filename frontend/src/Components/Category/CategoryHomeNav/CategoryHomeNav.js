import React from "react";
import { Link } from "react-router-dom";

function CategoryHomeNav() {
  return (
    <header className="mx-auto static-fixed mt-5 p-1 ">
      <div className="flex justify-between items-center max-w-8xl p-2">
        <ul className="flex gap-5 font-bold">
          <Link to="/CatHome">
            <li className="text-2xl gap-6 bg-lime-600 p-2 rounded-lg w-24 text-center hover:bg-lime-500 hover:scale-110 transition duration-300">
              Home
            </li>
          </Link>
          <Link to="/CategoryHome">
            <li className="text-2xl gap-6 bg-lime-600 p-2 rounded-lg w-32 text-center hover:bg-lime-500 hover:scale-110 transition duration-300">
              Organic
            </li>
          </Link>
          <Link to="/CategoryHomeOr">
            <li className="text-2xl gap-6 bg-lime-600 p-2 rounded-lg w-44 text-center hover:bg-lime-500 hover:scale-110 transition duration-300">
              Recyclable
            </li>
          </Link>
          <Link to="/CategoryHomeHza">
            <li className="text-2xl gap-6 bg-lime-600 p-2 rounded-lg w-48 text-center hover:bg-lime-500 hover:scale-110 transition duration-300">
              Hazardous{" "}
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
export default CategoryHomeNav;
