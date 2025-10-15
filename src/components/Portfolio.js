import React from "react";
import PageHeader from "./PageHeader";
export default function Portfolio() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-3">Portfolio</h2>
      <p className="text-center text-muted">
        Voici quelques-unes de mes réalisations.
      </p>
      <hr className="mx-auto mb-5" style={{ width: "80px", border: "2px solid #007bff" }} />

      <div className="row g-4">
        {/* Carte 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src="/assets/fresh-food.jpg" className="card-img-top" alt="Fresh Food" />
            <div className="card-body text-center">
              <h5 className="card-title">Fresh Food</h5>
              <p className="card-text">Site de vente de produits frais en ligne</p>
              <a href="#" className="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer text-muted text-center">
              Site réalisé avec PHP et MySQL
            </div>
          </div>
        </div>

        {/* Carte 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src="/assets/restaurant-japonais.jpg" className="card-img-top" alt="Restaurant Akira" />
            <div className="card-body text-center">
              <h5 className="card-title">Restaurant Akira</h5>
              <p className="card-text">Site de restaurant en ligne</p>
              <a href="#" className="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer text-muted text-center">
              Site réalisé avec WordPress
            </div>
          </div>
        </div>

        {/* Carte 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src="/assets/espace-bien-etre.jpg" className="card-img-top" alt="Espace bien-être" />
            <div className="card-body text-center">
              <h5 className="card-title">Espace bien-être</h5>
              <p className="card-text">Site de soins et spa en ligne</p>
              <a href="#" className="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer text-muted text-center">
              Réalisé avec LARAVEL
            </div>
          </div>
        </div>

        {/* Carte 4 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src="/assets/seo.jpg" className="card-img-top" alt="SEO" />
            <div className="card-body text-center">
              <h5 className="card-title">SEO</h5>
              <p className="card-text">Amélioration du référencement d’un site e-commerce</p>
              <a href="#" className="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer text-muted text-center">
              Utilisation des outils SEO
            </div>
          </div>
        </div>

        {/* Carte 5 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src="/assets/coder.jpg" className="card-img-top" alt="Création d'une API" />
            <div className="card-body text-center">
              <h5 className="card-title">Création d’une API</h5>
              <p className="card-text">Développement d’une API RESTful publique</p>
              <a href="#" className="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer text-muted text-center">
              Réalisée avec PHP et Symfony
            </div>
          </div>
        </div>

        {/* Carte 6 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src="/assets/screens.jpg" className="card-img-top" alt="Maquette d’un site web" />
            <div className="card-body text-center">
              <h5 className="card-title">Maquette d’un site web</h5>
              <p className="card-text">Création d’une maquette graphique</p>
              <a href="#" className="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer text-muted text-center">
              Réalisée avec Figma
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
