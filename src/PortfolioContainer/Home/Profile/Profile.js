import React, { useState } from "react";
import "./Profile.css";
import Container from "react-bootstrap/esm/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Profile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container>
        <div className="profile-container">
          <div className="profile-parent">
            <div className="profile-details">
              <div className="colz">
                <div className="colz-icon">
                  <a href="https://www.facebook.com/nadh.rebhi">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                  <a href="https://www.instagram.com/nadh.rebhi/">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/nadh_rebhi">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com/in/nidhalrebhi">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="profile-details-name">
                <span className="primary-text">
                  Hello, I'M <span className="highlighted-text">Nidhal</span>
                </span>
              </div>
              <div className="profile-details-role">
                <span className="primary-text">
                  <h1 style={{ color: "#ffc000" }}>Cyber-Security</h1>
                  <h1 style={{ color: "#ffc000" }}>
                    Junior Full Stack Developer
                  </h1>
                  <span className="profile-role-tagline">
                    Cyber security engineer & building websites with front and
                    back end operations .
                  </span>
                </span>
              </div>
              <div className="profile-optins">
                <button className="btn highlighted-btn" onClick={handleShow}>
                  Hire me
                </button>
                <a href="NidhalRebhi.pdf" download="NidhalRebhi.pdf">
                  <button className="btn highlighted-btn">Get Resume</button>
                </a>
              </div>
            </div>
            <div className="profile-picture">
              <div className="profile-picture-background"></div>
            </div>
          </div>
        </div>
        {/* hire me */}
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Contact me</Modal.Title>
          </Modal.Header>
          <Modal.Body>Welcome !</Modal.Body>
          <Modal.Body>
            You can contact me in this mail r.nidhal97@outlook.fr
          </Modal.Body>
          <Modal.Body>
            or, you can contact me in Whatsapp with this number +21653416956
          </Modal.Body>
          <Modal.Body>Thank you ♥</Modal.Body>

          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}
