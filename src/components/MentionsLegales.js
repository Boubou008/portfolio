import React from "react";
import PageHeader from "./PageHeader";
export default function MentionsLegales() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-3">Mentions légales</h2>
      <hr
        className="mx-auto mb-5"
        style={{ width: "80px", border: "2px solid #007bff" }}
      />

      <div className="accordion" id="mentionsAccordion">

        {/* Éditeur du site */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Éditeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <p><strong>John Doe</strong></p>
              <p>40 rue Laure Diebold<br />69009 Lyon, France</p>
              <p>10 20 30 40 50</p>
              <p>john.doe@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Hébergeur */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <p><strong>alwaysdata</strong></p>
              <p>91 Rue du Faubourg Saint-Honoré<br />75008 Paris</p>
              <p>
                <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">
                  www.alwaysdata.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Crédits */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <p>
                Ce site a été réalisé par John Doe, étudiant au{" "}
                <a href="https://www.centre-europeen-formation.fr" target="_blank" rel="noreferrer">
                  Centre Européen de Formation
                </a>.
              </p>
              <p>
                Les images utilisées sur ce site sont libres de droits et ont été
                obtenues sur le site{" "}
                <a href="https://pixabay.com" target="_blank" rel="noreferrer">
                  Pixabay
                </a>.
              </p>
              <p>
                La favicon de ce site a été fournie par{" "}
                <a href="https://www.flaticon.com" target="_blank" rel="noreferrer">
                  Flaticon
                </a>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
