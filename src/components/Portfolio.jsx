import React from "react";

const Portfolio = () => {
  const scrollToNext = () => {
    document.getElementById("recognition")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="portfolio"
      className="relative w-full min-h-screen bg-white text-black px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full bg-white border border-black rounded-lg p-8 shadow-md transition-all duration-300 hover:shadow-blue-400/40">
        <div className="text-center mb-12">
          <h1 className="text-sm font-medium text-blue-500 tracking-wider uppercase">Our Products</h1>
          <h2 className="text-4xl font-bold relative inline-block pb-2">
            Building Future-Ready Digital Solutions
            <span className="block h-1 bg-blue-500 w-24 mx-auto mt-2 rounded-full animate-pulse"></span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Explore our high-impact, scalable IT product that drives innovation and efficiency.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image with Link */}
          <a
            href="https://your-product-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/2"
          >
            <div className="w-full h-60 bg-gray-200 flex items-center justify-center rounded-md overflow-hidden">
              <span className="text-sm text-gray-500">Your Product Image</span>
              {/* Replace with:
                  <img src="your-image.jpg" alt="Product" className="w-full h-full object-cover" /> */}
            </div>
          </a>

          {/* Content */}
          <div className="w-full md:w-1/2 md:pl-8">
            <h3 className="text-sm text-blue-600 tracking-widest uppercase">Featured Product</h3>
            <h4 className="text-3xl font-bold mb-3">Cloud Migration</h4>
            <p className="text-gray-700 mb-4">
              Efficient cloud transition services tailored for modern enterprises, ensuring scalability, security, and cost-efficiency.
            </p>
            <a
              href="https://your-product-link.com"
              className="inline-block px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-none transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button onClick={scrollToNext} className="animate-bounce text-blue-500">
          <svg
            className="w-6 h-6 md:w-8 md:h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
