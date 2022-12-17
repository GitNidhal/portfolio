import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import me from "../../assets/Home/me.jpg";
import "./certif.css";
const Certifications = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "5%",
        }}
      >
        <div className="skill">
          {/* Cyber security */}
          <div className="set">
            <Card style={{ width: "18rem", marginBottom: "5%" }}>
              <Card.Img variant="top" src="/img/udemy.png" />
              <Card.Body>
                <Card.Title style={{ color: "#ffc000", textAlign: "center" }}>
                  Learn Ethical Hacking
                </Card.Title>
                <Card.Text style={{ color: "#000000" }}>Udemy</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="skill">
          {/* Cyber security */}
          <div className="set">
            <Card
              style={{ width: "18rem", marginBottom: "5%", marginTop: "5%" }}
            >
              <Card.Img variant="top" src="/img/gomycode.png" />
              <Card.Body>
                <Card.Title style={{ color: "#ffc000", textAlign: "center" }}>
                  Full Stack JS Bootcamp
                </Card.Title>
                <Card.Text style={{ color: "#000000" }}>GOMYCODE</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="skill">
          {/* Cyber security */}
          <div className="set">
            <Card
              style={{ width: "18rem", marginBottom: "5%", marginTop: "5%" }}
            >
              <Card.Img variant="top" src="/img/security.png" />
              <Card.Body>
                <Card.Title style={{ color: "#ffc000", textAlign: "center" }}>
                  Security fundamentals
                </Card.Title>
                <Card.Text style={{ color: "#000000" }}>Udemy</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="skill">
          {/* Cyber security */}
          <div className="set">
            <Card
              style={{ width: "18rem", marginBottom: "5%", marginTop: "5%" }}
            >
              <Card.Img variant="top" src="/img/networking.png" />
              <Card.Body>
                <Card.Title style={{ color: "#ffc000", textAlign: "center" }}>
                  {" "}
                  Networking fundamentals
                </Card.Title>
                <Card.Text style={{ color: "#000000" }}>Udemy</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="skill">
          {/* Cyber security */}
          <div className="set">
            <Card
              style={{ width: "18rem", marginBottom: "5%", marginTop: "5%" }}
            >
              <Card.Img variant="top" src="/img/html5.png" />
              <Card.Body>
                <Card.Title style={{ color: "#ffc000", textAlign: "center" }}>
                  HTML 5
                </Card.Title>
                <Card.Text style={{ color: "#000000" }}>Udemy</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Certifications;
