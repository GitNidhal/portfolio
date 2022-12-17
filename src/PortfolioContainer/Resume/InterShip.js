import React from "react";
import Container from "react-bootstrap/esm/Container";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const Intership = () => {
  return (
    <Container>
      <ListGroup as="ol">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <h2 class="text-warning">INTERSHIP : Cana-com Sfax</h2>
            </div>
            <h5>POSITION: NETWORK ADMINISTRATION</h5>

            <ul>
              <li style={{ color: "black" }}>
                Setting up a virtual infrastructure
              </li>
              <li style={{ color: "black" }}>
                Base configuration and router audit
              </li>
              <li style={{ color: "black" }}>Website Penesting</li>
            </ul>
            <h5>Intership skills :</h5>
            <h6>In system : Microsoft, Linux and Windows server</h6>
            <h6>In network : Firewall, VPN, VLAN and routage</h6>
            <h6>In development: Cabling, storage and DataBase</h6>
          </div>
          <Badge bg="success" pill>
            June 2019 to October 2019
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold edutitle">
              <h2 class="text-warning">
                Technician Intership : Tunisia Telecom
              </h2>
            </div>
            <h5>POSITION : ADMINISTRATION AT GAFSA RADIO UNIT</h5>
            <ul>
              <li style={{ color: "black" }}>
                Maintain and repair GSM equipment
              </li>
              <li style={{ color: "black" }}>
                Installation of telephone pole lines
              </li>
              <li style={{ color: "black" }}>
                Repair and configure outdoor terminals
              </li>
            </ul>
          </div>
          <Badge bg="success" pill>
            Aug 2017 to Sept 2017
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <h2 class="text-warning">Technisian Intership: STEG Gafsa</h2>
            </div>
          </div>
          <Badge bg="success" pill>
            June 2016
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Intership;
