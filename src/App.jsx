import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
