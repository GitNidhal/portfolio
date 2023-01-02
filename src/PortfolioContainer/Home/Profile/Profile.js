import React from "react";
import "./Profile.css";
import Container from "react-bootstrap/esm/Container";

export default function Profile() {
  return (
    <>
      <Container>
        <div className="profile-container">
          <div className="profile-parent">
            <div className="profile-details">
              <div className="colz">
                <div className="colz-icon">
                  <a href="#">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-envelope"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
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
                    Cyber security analyst & building websites with front and
                    back end operations .
                  </span>
                </span>
              </div>
              <div className="profile-optins">
                <button className="btn highlighted-btn">Hire me</button>
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
      </Container>
    </>
  );
}
