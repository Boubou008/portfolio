import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio"; // <-- nouvelle page
import Contact from "./components/Contact";     // <-- nouvelle page
import MentionsLegales from "./components/MentionsLegales";
<Route path="/mentions-legales" element={<MentionsLegales />} />


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <section className="container my-5" id="about">
                <div className="row">
                  <About />
                  <Skills />
                </div>
              </section>
            </>
          }
        />

        {/* Pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
