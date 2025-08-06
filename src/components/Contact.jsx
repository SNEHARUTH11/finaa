import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
<<<<<<< HEAD
      className="w-full py-20 px-6 md:px-12 bg-gray-100 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Have a question or proposal? Reach out to us and let’s talk.
        </p>
      </div>
=======
      className="w-full bg-gradient-to-br from-emerald-50 to-gray-100 text-gray-800 px-6 py-24 relative"
    >
      {/* Top Arrow Divider */}
      <div className="absolute -top-1 left-0 w-full">
        <svg
          className="w-full h-16 text-emerald-600"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path d="M0,160L1440,32L1440,0L0,0Z"></path>
        </svg>
      </div>

      {/* Heading */}
      <div className="text-center mb-12 z-10 relative">
        <h2 className="text-sm text-emerald-600 uppercase tracking-widest">Get in Touch</h2>
        <h3 className="text-4xl font-bold">Contact Us</h3>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Reach out to us for inquiries, collaborations, or just to say hello.
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 z-10 relative">
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-200">
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>

        {/* Placeholder: Map or Image */}
        <div className="w-full h-96 bg-gray-300 rounded-2xl shadow-lg border border-gray-400 flex items-center justify-center text-gray-600 text-xl">
          Location / Map / Image
        </div>
      </div>
>>>>>>> 38793e3 (Added animations and visual updates)
    </section>
  );
};

export default Contact;

