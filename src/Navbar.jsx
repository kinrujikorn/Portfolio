// export default Navbar;

// import { Link } from "react-router-dom";

import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-50 bg-white">
      <div className="flex justify-between">
        <ul className="flex">
          <li className="ml-8 font-medium">
            <a href="#home" className="text-black font-bold text-3xl">
              Portfolio
            </a>
          </li>
        </ul>
        <ul className="flex">
          <li className="mr-8">
            <a href="#home" className="text-black text-xl">
              Home
            </a>
          </li>
          <li className="mr-8">
            <a href="#about" className="text-black text-xl">
              About
            </a>
          </li>
          <li className="mr-8">
            <a href="#contact" className="text-black text-xl">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
