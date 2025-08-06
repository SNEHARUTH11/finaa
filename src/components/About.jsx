<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect, useRef } from "react";
>>>>>>> 38793e3 (Added animations and visual updates)

const About = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let nodes = [];
    const maxNodes = 100;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const createNode = (x, y) => ({
      x,
      y,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: 2 + Math.random() * 2,
    });

    const addNodes = (count = 5) => {
      for (let i = 0; i < count; i++) {
        nodes.push(createNode(Math.random() * canvas.width, Math.random() * canvas.height));
        if (nodes.length > maxNodes) nodes.shift();
      }
    };

    const drawNetwork = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#3b82f6";
      ctx.strokeStyle = "#3b82f6";

      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(node.x - nodes[j].x, node.y - nodes[j].y);
          if (dist < 100) {
            ctx.globalAlpha = 1 - dist / 100;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });

      requestAnimationFrame(drawNetwork);
    };

    canvas.addEventListener("pointerdown", () => addNodes(10));
    addNodes(30);
    drawNetwork();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <section
      id="about"
<<<<<<< HEAD
      className="w-full py-20 px-6 md:px-12 bg-white min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          We are a passionate team of creators delivering innovative experiences across industries.
=======
      className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 py-20 md:py-24"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left z-10 space-y-6">
        <h1 className="text-sm font-semibold text-blue-500 tracking-widest uppercase">
          About Us
        </h1>

        {/* Decorative Blue Lines */}
        <div className="flex flex-col space-y-2 my-3 items-center md:items-start">
          <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
          <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
          <div className="h-1 w-8 bg-blue-500 rounded-full"></div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold leading-snug text-white">
          Connecting the dots. It’s what we do.
        </h2>

        <div className="space-y-1 text-blue-400 text-sm font-semibold">
          <p>• Secure IT Solutions</p>
          <p>• Cloud & AI Integration</p>
          <p>• Scalable Enterprise Platforms</p>
        </div>

        <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
          We are a trusted IT solutions provider building intelligent, secure, and scalable systems.
          From cloud computing and cybersecurity to AI and enterprise IT, we connect ideas to execution.
>>>>>>> 38793e3 (Added animations and visual updates)
        </p>

        <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-none shadow-md transition-all duration-300">
          Connect
        </button>
      </div>

      {/* Right Side Canvas */}
      <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] mt-12 md:mt-0">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>

      {/* Flash Line - Bottom Center */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-28 h-[3px] bg-blue-500 animate-pulse rounded-full" />

      {/* Down Arrow - Scroll to Portfolio */}
      <a
        href="#portfolio"
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-blue-500 hover:text-blue-600 transition"
      >
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
};

export default About;
