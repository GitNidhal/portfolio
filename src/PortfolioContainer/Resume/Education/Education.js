import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./education.css";

const Education = () => {
  return (
    <Container style={{ marginTop: "3rem" }}>
      <h1 style={{ color: "black", textAlign: "center" }}> Education</h1>
      <div className="main-timeline">
        {/* start experience section*/}
        <div className="timeline">
          <div className="icon" />
          <div className="date-content">
            <div className="date-outer">
              <span className="date">
                <span className="month">7 Months</span>
                <span className="year">2022</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">Full-Stack JavaScript</h5>
            <h6>GOMYCODE</h6>
          </div>
        </div>
        {/* end experience section*/}
        {/* start experience section*/}
        <div className="timeline">
          <div className="icon" />
          <div className="date-content">
            <div className="date-outer">
              <span className="date">
                <span className="month">2 Years</span>
                <span className="year">2020</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">MASTER'S DEGREE : CYBERSECURITY</h5>
            <h6>HIGHER INSTITUTE OF APPLIED SCIENCES & TECHNOLOGY OF GAFSA</h6>
          </div>
        </div>
        {/* end experience section*/}
        {/* start experience section*/}
        <div className="timeline">
          <div className="icon" />
          <div className="date-content">
            <div className="date-outer">
              <span className="date">
                <span className="month">3 Years</span>
                <span className="year">2018</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">Applied license Computer networks</h5>
            <h6>HIGHER INSTITUTE OF APPLIED SCIENCES & TECHNOLOGY OF GAFSA</h6>
          </div>
        </div>
        {/* end experience section*/}
      </div>
    </Container>
  );
};

export default Education;
