import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          {/* Colonne 1 : Infos + contact + réseaux sociaux */}
          <div className="col-md-4">
            <h5>John Doe</h5>
            <p>Développeur web fullstack basé à Lyon</p>
            <p>john.doe@gmail.com</p>
            <p>10 20 30 40 50</p>
            <div className="footer-social d-flex justify-content-center gap-3 mt-3">
              <a href="https://github.com/johndoe" target="_blank" rel="noreferrer">
                <img src="/assets/github.png" alt="GitHub" width="30" />
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noreferrer">
                <img src="/assets/linkedin.png" alt="LinkedIn" width="30" />
              </a>
              <a href="https://twitter.com/johndoe" target="_blank" rel="noreferrer">
                <img src="/assets/twitter.png" alt="Twitter" width="30" />
              </a>
            </div>
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

          {/* Colonne 3 : Mes dernières réalisations (liens internes vers Portfolio) */}
          <div className="col-md-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><Link to="/portfolio#project-freshfood" className="text-white">Food App</Link></li>
              <li><Link to="/portfolio#project-restaurant-japonais" className="text-white">Interface Admin</Link></li>
              <li><Link to="/portfolio#project-coder" className="text-white">Création d’une API</Link></li>
              <li><Link to="/portfolio#project-screens" className="text-white">Maquette de site</Link></li>
              <li><Link to="/portfolio#project-seo" className="text-white">SEO</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center mb-0">© 2025 John Doe. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
