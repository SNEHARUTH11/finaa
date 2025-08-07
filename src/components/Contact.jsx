import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 md:px-12 bg-white min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-2xl w-full space-y-8">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Get in Touch
        </h2>

        <p className="text-center text-gray-600">
          Whether you have a question or just want to say hello, our team is ready to help.
        </p>

        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
