import React from "react";

export default function PageHeader({ title, subtitle }) {
  return (
    <>
      {/* Bannière seule */}
      <div
        style={{
          backgroundImage: "url('/assets/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",   // hauteur fixe de la bannière
          width: "100%",
        }}
      ></div>

      {/* Texte sous la bannière */}
      <div className="text-center my-4">
        <h2 className="fw-bold">{title}</h2>
        <p className="text-muted">{subtitle}</p>
        <hr
          className="mx-auto"
          style={{ width: "80px", border: "2px solid #007bff" }}
        />
      </div>
    </>
  );
}
