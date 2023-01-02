import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Education from "./Education/Education";
import Exper from "./Experience/Exper";

const Resume = () => {
  return (
    <Container>
      <h1 style={{ color: "black", textAlign: "center", marginTop: "3rem" }}>
        {" "}
        Resume
      </h1>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item style={{ marginTop: "2px" }}>
                <Nav.Link eventKey="first">InterShip</Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ marginTop: "2px" }}>
                <Nav.Link eventKey="second">Education</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Exper />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Education />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Resume;
