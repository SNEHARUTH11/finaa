import React, { useEffect, useRef } from "react";

const Portfolio = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("animate-slideIn");
          section.classList.remove("opacity-0");
        }
      },
      { threshold: 0.1 }
    );
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    document.getElementById("recognition")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative min-h-screen w-full bg-white text-black py-24 px-6 opacity-0 transition-opacity duration-1000 overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold inline-block text-black">
          Our <span className="text-green-500">Products</span>
          <span className="block h-1 w-20 mx-auto bg-green-500 mt-2 rounded-full animate-pulse" />
        </h2>
      </div>

      {/* Glowing Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-green-400 via-white to-green-500 opacity-30 blur-3xl animate-spin-slow z-0" />

      {/* Product Card */}
      <div className="flex justify-center relative z-10">
        <div className="group [perspective:1200px]">
          <div className="relative w-80 h-96 duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-xl shadow-2xl border border-gray-300 bg-white">

            {/* Front */}
            <div className="absolute inset-0 p-6 backface-hidden flex flex-col items-center justify-center rounded-xl transition-all duration-500 group-hover:shadow-lg group-hover:scale-105">
              <div className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full mb-4 shadow-xl group-hover:animate-ping-slow">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-600">Product 1</h3>
              <p className="text-center text-gray-700 mb-4">
                A powerful solution focused on performance and scalability.
              </p>
              <a
                href="/product/1"
                className="mt-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                View Product
              </a>
            </div>

            {/* Back */}
            <div className="absolute inset-0 p-6 [transform:rotateY(180deg)] backface-hidden bg-green-500 text-white rounded-xl flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold mb-2">More Info</h3>
              <p className="text-center mb-4">
                This product integrates the latest technologies for modern businesses.
              </p>
              <a
                href="/product/1"
                className="px-4 py-2 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="mt-16 flex justify-center z-10 relative">
        <button onClick={scrollToNext}>
          <svg
            className="w-8 h-8 text-green-500 animate-bounce"
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

