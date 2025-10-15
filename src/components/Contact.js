import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import PageHeader from "./PageHeader";

export default function Contact() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-3">Contact</h2>
      <p className="text-center text-muted">
        Pour me contacter en vue d’un entretien ou d’une future collaboration,
        merci de remplir le formulaire de contact.
      </p>
      <hr
        className="mx-auto mb-5"
        style={{ width: "80px", border: "2px solid #007bff" }}
      />

      <div className="row">
        {/* Formulaire */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h4 className="mb-3">Formulaire de contact</h4>
            <hr style={{ border: "1px solid #007bff" }} />
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Votre adresse email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sujet"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Envoyer
              </button>
            </form>
          </div>
        </div>

        {/* Coordonnées + Map */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h4 className="mb-3">Mes coordonnées</h4>
            <hr style={{ border: "1px solid #007bff" }} />
            <p><strong>John Doe</strong></p>
            <p>
              <FaMapMarkerAlt className="me-2 text-primary" />
              40 rue Laure Diebold, 69009 Lyon, France
            </p>
            <p>
              <FaPhone className="me-2 text-primary" />
              10 20 30 40 50
            </p>
            <p>
              <FaEnvelope className="me-2 text-primary" />
              john.doe@gmail.com
            </p>

            {/* Google Maps */}
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.041609356842!2d4.8055!3d45.7833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb1e8c123!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
