import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 md:px-12 bg-gray-100 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Have a question or proposal? Reach out to us and let’s talk.
        </p>
      </div>
    </section>
  );
};

export default Contact;

