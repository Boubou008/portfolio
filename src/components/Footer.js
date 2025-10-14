import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>John Doe</h5>
            <p>40 rue Lorem Diebold<br/>69000 Lyon, France</p>
            <p>john.doe@gmail.com</p>
          </div>
          <div className="col-md-4">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Accueil</a></li>
              <li><a href="#" className="text-white">Services</a></li>
              <li><a href="#" className="text-white">Portfolio</a></li>
              <li><a href="#" className="text-white">Mentions légales</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>Food App</li>
              <li>Interface Admin</li>
              <li>Création d’une API</li>
              <li>Maquette de site</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
