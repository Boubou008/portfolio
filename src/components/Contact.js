import React from "react";
import PageHeader from "./PageHeader";

export default function Contact() {
  return (
    <>
      {/* Entête avec bannière */}
      <PageHeader
        title="Contact"
        subtitle="Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire."
      />

      {/* Contenu principal */}
      <section className="container my-5">
        <div className="row">
          {/* Formulaire */}
          <div className="col-md-6">
            <h5>Formulaire de contact</h5>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Votre nom" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Votre adresse email" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Votre numéro de téléphone" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Sujet" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Votre message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>

          {/* Coordonnées */}
          <div className="col-md-6">
            <h5>Mes coordonnées</h5>
            <p><strong>John Doe</strong></p>
            <p>40 rue Laure Diebold<br />69009 Lyon, France</p>
            <p>📞 10 20 30 40 50</p>
            <p>📧 john.doe@gmail.com</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.665793631232!2d4.796403015570573!3d45.7789499791054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebb4c90d9b7f%3A0x408ab2ae4bb2090!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1615389234567!5m2!1sfr!2sfr"
              width="100%"
              height="250"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              title="Localisation"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
