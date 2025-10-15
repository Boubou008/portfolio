import React from "react";

export default function Contact() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Me contacter</h2>
      <p className="text-center text-muted">
        Vous pouvez m’envoyer un message via ce formulaire
      </p>

      <form className="col-md-6 mx-auto mt-4">
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input type="text" className="form-control" placeholder="Votre nom" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Votre email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="5" placeholder="Votre message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </section>
  );
}
