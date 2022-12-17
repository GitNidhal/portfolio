import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export default function Navigat() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#042326" }}>
        <Container fluid>
          <Navbar.Toggle />
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                {" "}
                <Nav.Link style={{ color: "white" }}>
                  <Link
                    to="/"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link style={{ color: "white" }}>Resume</Nav.Link>
                <Nav.Link style={{ color: "white" }}>Skills</Nav.Link>
                <Nav.Link style={{ color: "white" }}>Contact me</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
