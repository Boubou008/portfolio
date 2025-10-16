import React, { useState } from "react";
import GitHubModal from "./GitHubModal";

export default function Hero() {
  const [show, setShow] = useState(false);

  return (
    <header
      className="text-white text-center d-flex align-items-center"
      style={{
        height: "100vh",
        backgroundImage: "url('/assets/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <h1>Bonjour, je suis John Doe</h1>
        <p className="lead">Développeur web fullstack</p>
        <button className="btn btn-danger mt-3" onClick={() => setShow(true)}>
          En savoir plus
        </button>

        {/* Modale */}
        <GitHubModal show={show} handleClose={() => setShow(false)} />
      </div>
    </header>
  );
}
