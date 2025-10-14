import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="container my-5" id="about">
        <div className="row">
          <About />
          <Skills />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
