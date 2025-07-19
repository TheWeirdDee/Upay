import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/Images/UpayHero.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Why Upay", path: "/Upay" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-purple-100 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative z-50">
        <div className="flex items-center gap-3">
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiX className="text-3xl text-black" />
              ) : (
                <HiMenu className="text-3xl text-black" />
              )}
            </button>
          </div>

          <NavLink to="/" className="md:ml-2 ml-0">
            <img src={logo} alt="Shopique Logo" className="h-10 w-auto" />
          </NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-4 mr-10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-md font-medium px-6 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-black text-white"
                    : "text-black hover:text-purple-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div
        className={`fixed top-[64px] left-0 w-full bg-purple-100 shadow-md overflow-hidden transition-all duration-500 ease-in-out z-40 border-t border-[#3348722c] lg:hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 py-4 gap-3">
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 text-lg font-medium rounded-lg ${
                  index === 0 ? "mt-2 pt-4" : ""
                } ${
                  isActive
                    ? "bg-black text-white"
                    : "text-black hover:text-purple-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-white opacity-30 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
