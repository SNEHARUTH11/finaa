// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Recognition', href: '#recognition' },
    { name: 'Our People', href: '#people' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          MyCompany
        </div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
