import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
