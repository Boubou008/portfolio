import React from "react";

export default function Portfolio() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Mes réalisations</h2>
      <p className="text-center text-muted">Voici quelques projets récents</p>

      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <img src="/assets/project1.jpg" className="card-img-top" alt="Projet 1" />
            <div className="card-body">
              <h5 className="card-title">Projet 1</h5>
              <p className="card-text">Description rapide du projet.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <img src="/assets/project2.jpg" className="card-img-top" alt="Projet 2" />
            <div className="card-body">
              <h5 className="card-title">Projet 2</h5>
              <p className="card-text">Description rapide du projet.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <img src="/assets/project3.jpg" className="card-img-top" alt="Projet 3" />
            <div className="card-body">
              <h5 className="card-title">Projet 3</h5>
              <p className="card-text">Description rapide du projet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
