import React from "react";
import Container from "react-bootstrap/esm/Container";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const Education = () => {
  return (
    <Container>
      <ListGroup as="ol">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <h2 class="text-warning">Master's degree in cybersecurity</h2>
            </div>
            <h5>
              HIGHER INSTITUTE OF APPLIED SCIENCES AND TECHNOLOGY OF GAFSA
            </h5>
            <ul>
              <li style={{ color: "black" }}>
                Intrusion detection system based on neural networks
              </li>
              <li style={{ color: "black" }}>
                Creation of virtual neural networks
              </li>
            </ul>
          </div>
          <Badge bg="success" pill>
            2018 - 2020
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold edutitle">
              <h2 class="text-warning">Full-Stack JavaScript Bootcamp</h2>
            </div>
            <h5>GOMYCODE</h5>
            <ul>
              <li style={{ color: "black" }}>Creation E-commerce website</li>
              <li style={{ color: "black" }}>Personal Portfolio</li>
            </ul>
          </div>
          <Badge bg="success" pill>
            2022
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <h2 class="text-warning">Applied license Computer networks</h2>
            </div>
            <h5>
              HIGHER INSTITUTE OF APPLIED SCIENCES AND TECHNOLOGY OF GAFSA
            </h5>
            <ul>
              <li style={{ color: "black" }}>
                Mobile application for the management/maintenance of spare parts
              </li>
            </ul>
          </div>
          <Badge bg="success" pill>
            2016-2018
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Education;
