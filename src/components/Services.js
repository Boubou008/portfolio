import React from "react";
import { FaPenNib, FaCode } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import PageHeader from "./PageHeader";

export default function Services() {
  return (
    <>
      {/* Header avec image de fond */}
      <PageHeader
        title="Mon offre de services"
        subtitle="Voici les prestations sur lesquelles je peux intervenir"
      />

      {/* Contenu */}
      <section className="container my-5">
        <div className="row mt-5">
          {/* UX Design */}
          <div className="col-md-4">
            <div className="card p-4 text-center shadow-sm">
              <FaPenNib size={40} className="text-primary mb-3" />
              <h5>UX Design</h5>
              <p>
                L’UX Design est une discipline qui consiste à concevoir des
                produits en plaçant l’utilisateur au centre des préoccupations.
              </p>
            </div>
          </div>

          {/* Développement web */}
          <div className="col-md-4">
            <div className="card p-4 text-center shadow-sm">
              <FaCode size={40} className="text-primary mb-3" />
              <h5>Développement web</h5>
              <p>
                Le développement de sites web consiste à créer des sites internet
                en utilisant HTML, CSS, JavaScript, PHP, React et d’autres frameworks.
              </p>
            </div>
          </div>

          {/* Référencement */}
          <div className="col-md-4">
            <div className="card p-4 text-center shadow-sm">
              <FaMagnifyingGlass size={40} className="text-primary mb-3" />
              <h5>Référencement</h5>
              <p>
                Le référencement naturel (SEO) consiste à optimiser un site web
                pour le faire remonter dans les résultats de recherche (Google, Bing…).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
