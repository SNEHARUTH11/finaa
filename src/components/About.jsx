import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const canvasRef = useRef();
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade-in animation on scroll using IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let nodes = [];
    const maxNodes = 150;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createNode = (x, y) => ({
      x,
      y,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
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
      ctx.fillStyle = "#00ff5a";
      ctx.strokeStyle = "#00ff5a";

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

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("pointerdown", () => addNodes(10));
    addNodes(30);
    drawNetwork();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 py-20 md:py-24 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left z-10 space-y-6 animate-float">
        <h1 className="text-sm font-semibold text-green-400 tracking-widest uppercase animate-slideIn">
          About Us
        </h1>

        {/* Decorative Green Lines */}
        <div className="flex flex-col space-y-2 my-3 items-center md:items-start animate-lineGrow">
          <div className="h-1 w-16 bg-green-400 rounded-full animate-pulse" />
          <div className="h-1 w-12 bg-green-400 rounded-full animate-pulse" />
          <div className="h-1 w-8 bg-green-400 rounded-full animate-pulse" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold leading-snug text-white animate-slideIn delay-200">
          Connecting the dots. It’s what we do.
        </h2>

        <div className="space-y-1 text-green-400 text-sm font-semibold animate-slideIn delay-400">
          <p>• Secure IT Solutions</p>
          <p>• Cloud & AI Integration</p>
          <p>• Scalable Enterprise Platforms</p>
        </div>

        <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 animate-fadeIn delay-500">
          We are a trusted IT solutions provider building intelligent, secure, and scalable systems.
          From cloud computing and cybersecurity to AI and enterprise IT, we connect ideas to execution.
        </p>

        <button
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 hover:scale-105 transition-transform duration-300 text-white font-semibold rounded-none shadow-md"
        >
          Connect
        </button>
      </div>

      {/* Right Canvas */}
      <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] mt-12 md:mt-0">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>

      {/* Flash Line */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-28 h-[3px] bg-green-400 animate-pulse rounded-full" />

      {/* Down Arrow */}
      <a
        href="#portfolio"
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-green-400 hover:text-green-500 transition"
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

