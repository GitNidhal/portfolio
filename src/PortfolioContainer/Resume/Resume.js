import React from "react";
import Container from "react-bootstrap/esm/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Certifications from "./Certifications";
import Education from "./Education";
import Intership from "./InterShip";

const Resume = () => {
  return (
    <Container className="container">
      <Tabs
        defaultActiveKey="education"
        id="justify-tab-example"
        className="mb-3"
        justify
        bg="dark"
      >
        <Tab eventKey="education" title="Education">
          <Education />
        </Tab>
        <Tab eventKey="Intership" title="Intership">
          <Intership />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Resume;
