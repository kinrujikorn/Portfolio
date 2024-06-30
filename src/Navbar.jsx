import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full text-white p-4 z-10">
      <ul className="flex justify-end ">
        <li className="mr-4">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-4">
          <Link to="/About">About</Link>
        </li>
        <li className="mr-4">
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li className="mr-4">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
