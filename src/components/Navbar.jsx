import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
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
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
          Company
        </h1>
        <ul className="flex space-x-6">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-white hover:text-cyan-300 transition duration-300 hover:scale-105 font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] capitalize"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
