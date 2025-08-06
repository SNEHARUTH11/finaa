import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 md:px-12 bg-white min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          We are a passionate team of creators delivering innovative experiences across industries.
        </p>
      </div>
    </section>
  );
};

export default About;
