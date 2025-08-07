import React from "react";

const Recognition = () => {
  return (
    <section
      id="recognition"
      className="w-full py-24 px-6 md:px-12 bg-white min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp opacity-0">
          Recognition
        </h2>

        {/* Decorative underline */}
        <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mb-8 animate-fadeInUp opacity-0" style={{ animationDelay: "0.2s" }}></div>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fadeInUp opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          We are proud to be recognized as leaders in innovation, technology, and customer excellence.
          Our achievements are a reflection of our dedication to secure, scalable, and intelligent systems.
        </p>
      </div>
    </section>
  );
};

export default Recognition;
