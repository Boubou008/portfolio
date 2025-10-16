import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function GitHubModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Mon profil GitHub</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <img
          src="/assets/monstre.png" 
          alt="Avatar"
          className="img-fluid rounded-circle mb-3"
          style={{ width: "150px" }}
        />
        <h5>
          <a href="https://github.com/johndoe" target="_blank" rel="noreferrer">
            John Doe
          </a>
        </h5>
        <p className="text-muted">
          As we all know, John Doe’s identity is unknown. I just wanted to contribute without being known.
        </p>
        <ul className="list-unstyled text-start d-inline-block">
          <li>📂 Repositories : 1</li>
          <li>👥 Followers : 16</li>
          <li>➡️ Following : 0</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
