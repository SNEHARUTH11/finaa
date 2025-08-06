import React from "react";

<<<<<<< HEAD
=======
const jobOpenings = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-Time",
    description:
      "Looking for a React.js developer with a strong grasp of UI/UX and Tailwind CSS. 2+ years experience preferred.",
    applyLink: "#",
  },
  {
    title: "Backend Engineer",
    location: "Bangalore, India",
    type: "Full-Time",
    description:
      "Experienced Node.js and MongoDB developer needed to scale real-time infrastructure. Experience with APIs and databases required.",
    applyLink: "#",
  },
  {
    title: "UI/UX Designer",
    location: "Hybrid",
    type: "Part-Time",
    description:
      "Creative mind to design modern and responsive UIs. Must know Figma and Adobe XD.",
    applyLink: "#",
  },
];

>>>>>>> 38793e3 (Added animations and visual updates)
const Careers = () => {
  return (
    <section
      id="careers"
<<<<<<< HEAD
      className="w-full py-20 px-6 md:px-12 bg-white min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Careers</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Join our team and .............
        </p>
      </div>
=======
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white px-6 py-24 relative"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-sm text-emerald-300 uppercase tracking-widest">
          Join Us
        </h2>
        <h3 className="text-4xl font-bold underline decoration-emerald-400 underline-offset-8">
          Careers
        </h3>
        <p className="text-emerald-100 mt-4 max-w-2xl mx-auto">
          Explore exciting opportunities to grow with us and shape the future.
        </p>
      </div>

      {/* Jobs Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
        {jobOpenings.map((job, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-emerald-300/20 rounded-xl p-6 hover:shadow-[0_0_25px_#10b98155] transition-all duration-300"
          >
            <h4 className="text-xl font-semibold text-white mb-2">{job.title}</h4>
            <p className="text-sm text-emerald-200 mb-1">
              <strong>Location:</strong> {job.location}
            </p>
            <p className="text-sm text-emerald-200 mb-3">
              <strong>Type:</strong> {job.type}
            </p>
            <p className="text-emerald-100 mb-4">{job.description}</p>
            <a
              href={job.applyLink}
              className="inline-block px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg
          className="w-full h-24 text-emerald-900"
          viewBox="0 0 1440 320"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,160L1440,288L1440,320L0,320Z" />
        </svg>
      </div>
      {/* Arrow to Contact Section */}
<div className="absolute bottom-0 left-0 w-full">
  <a href="#contact">
    <svg
      className="w-full h-16 text-emerald-50 hover:opacity-80 transition"
      viewBox="0 0 1440 320"
      fill="currentColor"
    >
      <path d="M0,160L1440,32L1440,320L0,320Z"></path>
    </svg>
  </a>
</div>

>>>>>>> 38793e3 (Added animations and visual updates)
    </section>
    
  );
};

export default Careers;
