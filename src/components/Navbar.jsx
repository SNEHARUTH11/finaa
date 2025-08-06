<<<<<<< HEAD
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
=======
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

>>>>>>> 38793e3 (Added animations and visual updates)
  const sections = [
    "home",
    "about",
    "portfolio",
    "recognition",
    "people",
    "careers",
    "contact",
  ];

  return (
<<<<<<< HEAD
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
          Company
        </h1>
        <ul className="flex space-x-6">
=======
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-white drop-shadow">
          SCIFYX
        </h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6">
>>>>>>> 38793e3 (Added animations and visual updates)
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
<<<<<<< HEAD
                className="cursor-pointer text-white hover:text-cyan-300 transition duration-300 hover:scale-105 font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] capitalize"
=======
                className="cursor-pointer text-white hover:text-cyan-300 transition duration-300 hover:scale-105 font-medium capitalize drop-shadow"
>>>>>>> 38793e3 (Added animations and visual updates)
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
<<<<<<< HEAD
      </div>
=======

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 text-black px-6 py-4">
          <ul className="flex flex-col space-y-4">
            {sections.map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer block font-medium capitalize"
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
>>>>>>> 38793e3 (Added animations and visual updates)
    </nav>
  );
};

export default Navbar;
