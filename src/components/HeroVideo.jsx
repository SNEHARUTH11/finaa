import React from "react";

function HeroVideo() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
        src="/background.mp4"
        type="video/mp4"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Company</h1>
      </div>
    </div>
  );
}

export default HeroVideo;
