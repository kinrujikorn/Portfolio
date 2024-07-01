// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-10 bg-white relative z-10">
      <div className="flex justify-between">
        <ul className="flex">
          <li className="ml-8 font-medium">
            <Link to="/" className="text-black font-bold text-3xl">
              Portfolio
            </Link>
          </li>
        </ul>
        <ul className="flex">
          <li className="mr-8">
            <Link to="/" className="text-black  text-xl">
              Home
            </Link>
          </li>
          <li className="mr-8">
            <Link to="/About" className="text-black  text-xl">
              About
            </Link>
          </li>
          <li className="mr-8">
            <Link to="/Portfolio" className="text-black  text-xl">
              Portfolio
            </Link>
          </li>
          <li className="mr-8">
            <Link to="/Contact" className="text-black  text-xl">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
