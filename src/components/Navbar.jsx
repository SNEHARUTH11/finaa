import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-white drop-shadow">SCIFYX</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-white hover:text-cyan-300 transition duration-300 hover:scale-105 font-medium capitalize drop-shadow"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>

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
    </nav>
  );
};

export default Navbar;
