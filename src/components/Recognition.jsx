import React from "react";

const Recognition = () => {
<<<<<<< HEAD
  return (
    <section
      id="recognition"
      className="w-full py-20 px-6 md:px-12 bg-white min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Recognition</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          We are bla bal content to add.............
        </p>
      </div>
=======
  const recognition = {
    title: "ISO 27001:2022 Certified",
    description:
      "Recognized for excellence in information security, upholding international standards.",
    image: "/images/certificate-placeholder.jpg", // Replace with your actual image path
  };

  const scrollToNext = () => {
    document.getElementById("people")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="recognition"
      className="relative w-full min-h-screen px-6 py-24 bg-gradient-to-br from-[#1f2937] via-[#2d3748] to-[#0f766e] text-white flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-sm text-teal-400 uppercase tracking-widest">Recognition</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Our Certification</h3>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          We are proud to be acknowledged for maintaining international standards and delivering exceptional results.
        </p>
      </div>

      {/* Single Certificate */}
      <div className="bg-white/5 backdrop-blur-md border border-teal-500 rounded-2xl overflow-hidden shadow-xl hover:shadow-teal-500/50 transition duration-300 max-w-md w-full">
        <img
          src={recognition.image}
          alt={recognition.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h4 className="text-2xl font-semibold text-teal-400 mb-2">{recognition.title}</h4>
          <p className="text-gray-300">{recognition.description}</p>
        </div>
      </div>

      {/* Down Arrow */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl animate-bounce hover:scale-110 transition"
      >
        ↓
      </button>
>>>>>>> 38793e3 (Added animations and visual updates)
    </section>
  );
};

export default Recognition;
