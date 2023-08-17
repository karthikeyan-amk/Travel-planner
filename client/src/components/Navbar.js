// src/components/Navbar.js
import React from 'react';
import logo from "../assets/TravelManagerLogo.png"
const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Travel Logo" className="w-12 h-12 mr-2" />
        <span className="text-white font-semibold text-lg">Travel Manager</span>
      </div>
      <div className="space-x-4"> 
        <a
          href="/login"
          className="text-white hover:underline hover:text-yellow-300"
        >
          Login / Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
