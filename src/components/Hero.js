import React from "react";

export default function Hero() {
  return (
    <header
      className="text-white text-center d-flex align-items-center"
      style={{
        height: "100vh",
        backgroundImage: "url('/assets/hero-bg.jpg')", // chemin direct vers public/assets
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <h1>Bonjour, je suis John Doe</h1>
        <h3>Développeur web fullstack</h3>
        <a href="#about" className="btn btn-danger mt-3">
          En savoir plus
        </a>
      </div>
    </header>
  );
}
