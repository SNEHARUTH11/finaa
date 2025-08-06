import React from "react";
import Navbar from "./components/Navbar";
import HeroVideo from "./components/HeroVideo";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Recognition from "./components/Recognition";
import OurPeople from "./components/OurPeople";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroVideo />
      <About />
      <Portfolio />
      <Recognition />
      <OurPeople />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
