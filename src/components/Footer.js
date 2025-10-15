import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          
          {/* Colonne 1 : Infos personnelles */}
          <div className="col-md-4">
            <h5 className="mb-2">John Doe</h5>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-0">john.doe@gmail.com</p>
          </div>

          {/* Colonne 2 : Liens utiles */}
          <div className="col-md-4">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/services" className="text-white">Services</Link></li>
              <li><Link to="/portfolio" className="text-white">Portfolio</Link></li>
              <li><Link to="/contact" className="text-white">Contact</Link></li>
              <li><Link to="/mentions-legales" className="text-white">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Dernières réalisations */}
          <div className="col-md-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><a href="/portfolio#project-freshfood" className="text-white">Fresh Food</a></li>
              <li><a href="/portfolio#project-restaurant-japonais" className="text-white">Restaurant Akira</a></li>
              <li><a href="/portfolio#project-espace-bien-etre" className="text-white">Espace bien-être</a></li>
              <li><a href="/portfolio#project-seo" className="text-white">SEO</a></li>
              <li><a href="/portfolio#project-api" className="text-white">Création d’une API</a></li>
              <li><a href="/portfolio#project-screens" className="text-white">Maquette de site</a></li>
            </ul>
          </div>

        </div>

        <hr className="border-light" />
        <p className="text-center mb-0">
          © 2025 John Doe. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
