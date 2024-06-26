import React from "react";
import { useState } from "react";


const Header = () => {
  const [activeLink, setActiveLink] = useState("Home")
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">TextTune</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="" className={`mr-5 hover:text-gray-900 ${activeLink == "Home" ? "bg-cyan-600 text-white p-3 rounded-md" : ""} `} onClick={()=>{setActiveLink("Home")}}>Home</a>
          <a href="#about-us" className={`mr-5 hover:text-gray-900 ${activeLink == "About Us" ? "bg-cyan-600 text-white p-3 rounded-md" : ""} `} onClick={()=>{setActiveLink("About Us")}}>About Us</a>
          <a href="#contact-us" className={`mr-5 hover:text-gray-900 ${activeLink == "Contact Us" ? "bg-cyan-600 text-white p-3 rounded-md" : ""} `} onClick={()=>{setActiveLink("Contact Us")}}>Contact Us</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
