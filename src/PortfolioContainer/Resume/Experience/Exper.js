import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./exper.css";

const Exper = () => {
  return (
    <Container style={{ marginTop: "3rem" }}>
      <h1 style={{ color: "black", textAlign: "center" }}> InterShip</h1>
      <div className="main-timeline">
        {/* start experience section*/}
        <div className="timeline">
          <div className="icon" />
          <div className="date-content">
            <div className="date-outer">
              <span className="date">
                <span className="month">5 Months</span>
                <span className="year">2019</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">Cana-com Sfax</h5>
            <h6>NETWORK ADMINISTRATION</h6>
            <h8>- Setting up a virtual infrastructure</h8>
            <br />
            <h8>- Base configuration and router audit</h8>
            <br />
            <h8>- Website Penesting</h8>
            <br />
            <h8>- Information systems security audit and assessment</h8>
            <br />
            <h8>- Cabling, storage and databases</h8>
            <br />
            <h8>
              - Microsoft, Linux, Windows server, Firewall, VPN, VLAN and
              routing
            </h8>
          </div>
        </div>
        {/* end experience section*/}
        {/* start experience section*/}
        <div className="timeline">
          <div className="icon" />
          <div className="date-content">
            <div className="date-outer">
              <span className="date">
                <span className="month">1 Month</span>
                <span className="year">2017</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">Tunisia Telecom</h5>
            <h6>ADMINISTRATIONAT GAFSA RADIO UNIT</h6>
            <h8>- Maintain and repair GSM equipment</h8>
            <br />
            <h8>- Installation of telephone pole lines</h8>
            <br />
            <h8>- Repair and configure outdoor terminals</h8>
            <br />
          </div>
        </div>
        {/* end experience section*/}
        {/* start experience section*/}
        <div className="timeline">
          <div className="icon" />
          <div className="date-content">
            <div className="date-outer">
              <span className="date">
                <span className="month">1 Month</span>
                <span className="year">2016</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title"> STEG Gafsa</h5>
            <h6>Technisian Intership</h6>
          </div>
        </div>
        {/* end experience section*/}
      </div>
    </Container>
  );
};

export default Exper;
