import React from "react";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="w-full py-20 px-6 md:px-12 bg-gray-100 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Discover the work we’ve done across various industries and technologies.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;

