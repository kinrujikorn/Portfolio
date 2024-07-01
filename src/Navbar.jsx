// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full text-white p-4 z-10 bg-gray-800">
      <div className="flex justify-between">
        <ul className="flex">
          <li className="ml-8 font-medium">
            <Link to="/">Portfolio</Link>
          </li>
        </ul>
        <ul className="flex">
          <li className="mr-8">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-8">
            <Link to="/About">About</Link>
          </li>
          <li className="mr-8">
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <li className="mr-8">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
