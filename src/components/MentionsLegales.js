import React from "react";
import PageHeader from "./PageHeader";

export default function MentionsLegales() {
  return (
    <>
      {/* Entête avec bannière */}
      <PageHeader
        title="Mentions légales"
        subtitle="Informations légales concernant ce site"
      />

      {/* Contenu principal */}
      <section className="container my-5">
        <div className="accordion" id="mentionsLegalesAccordion">
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
              data-bs-parent="#mentionsLegalesAccordion"
            >
              <div className="accordion-body">
                <p><strong>John Doe</strong></p>
                <p>40 rue Laure Diebold, 69009 Lyon, France</p>
                <p>📞 10 20 30 40 50</p>
                <p>📧 john.doe@gmail.com</p>
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
              data-bs-parent="#mentionsLegalesAccordion"
            >
              <div className="accordion-body">
                <p><strong>alwaysdata</strong></p>
                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <p><a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">www.alwaysdata.com</a></p>
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
              data-bs-parent="#mentionsLegalesAccordion"
            >
              <div className="accordion-body">
                <p>
                  Ce site a été réalisé par John Doe, étudiant au 
                  <a href="https://www.centre-europeen-formation.fr" target="_blank" rel="noreferrer"> Centre Européen de formation</a>.
                </p>
                <p>
                  Les images utilisées proviennent du site 
                  <a href="https://pixabay.com" target="_blank" rel="noreferrer"> Pixabay</a>.
                </p>
                <p>
                  La favicon du site a été créée par 
                  <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noreferrer"> Freepik</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
