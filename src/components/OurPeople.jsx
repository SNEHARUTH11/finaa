import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Manaf",
    role: "Full Stack Developer",
    image: "/images/member1.jpg",
    linkedin: "https://linkedin.com/in",
  },
  {
    name: "Ayesha Khan",
    role: "Project Manager",
    image: "/images/member2.jpg",
    linkedin: "https://linkedin.com/in",
  },
  {
    name: "Rahul Mehta",
    role: "UI/UX Designer",
    image: "/images/member3.jpg",
    linkedin: "https://linkedin.com/in",
  },
  {
    name: "Reddy",
    role: "Marketing Lead",
    image: "/images/member4.jpg",
    linkedin: "https://linkedin.com/in",
  },
  {
    name: "Arjun Verma",
    role: "Data Analyst",
    image: "/images/member5.jpg",
    linkedin: "https://linkedin.com/in",
  },
];

const OurPeople = () => {
  return (
    <section
      id="people"
      className="w-full min-h-screen bg-gradient-to-br from-[#fdf6e3] to-[#2f2f2f] text-gray-900 px-6 py-24 relative"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-sm text-gray-600 uppercase tracking-widest">
          Meet Our Team
        </h2>
        <h3 className="text-4xl font-bold underline decoration-emerald-500 underline-offset-8">
          Our People
        </h3>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          The minds driving innovation and excellence at every level of our company.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-xl shadow-lg hover:shadow-[0_0_20px_#22c55e55] transition-all duration-300 p-4 flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4 shadow-md"
            />
            <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
            <p className="text-sm text-gray-500">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-emerald-600 hover:text-emerald-800 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        ))}
      </div>

      {/* Bottom Arrow Divider */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <a href="#careers">
          <svg
            className="w-full h-24 text-[#2f2f2f]"
            viewBox="0 0 1440 320"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,160L1440,288L1440,320L0,320Z"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default OurPeople;
