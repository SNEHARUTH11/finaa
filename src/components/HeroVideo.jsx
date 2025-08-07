// src/components/HeroVideo.jsx
import React from "react";
import { Link } from "react-scroll";

function HeroVideo() {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
        src="/background.mp4"
        type="video/mp4"
      />

      {/* Dark gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/80 to-black/40 z-10" />

      {/* Content on top of video */}
      <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to Our Company
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-xl">
          Empowering your business with innovation and creativity.
        </p>

        {/* 🔘 Sharp-Edged Grey Discover Button */}
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="inline-block px-8 py-3 bg-gray-700 text-white text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none border border-gray-600"
        >
          Discover
        </Link>
      </div>
    </div>
  );
}

export default HeroVideo;
