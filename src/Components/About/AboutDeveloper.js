import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const AboutDeveloper = () => {
  return (
    <div className="py-5" style={{ background: "#f8f9fa", minHeight: "100vh" }}>
      <Container>
        <h2 className="text-center text-primary mb-4 fw-bold">
          About the Developer
        </h2>
        <Row className="justify-content-center">
          <Col md={5} className="mb-4">
            <Card className="shadow border-0 text-center p-3">
              <Card.Img
                variant="top"
                src="https://i.ibb.co/jD3tCd4/mna.png"
                alt="Developer"
                className="rounded-circle mx-auto"
                style={{
                  width: "160px",
                  height: "160px",
                  objectFit: "cover",
                  marginTop: "-60px",
                  border: "6px solid #fff",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                }}
              />
              <Card.Body>
                <h3 className="text-success fw-bold mb-1">
                  Mohammad Nurul Azam
                </h3>
                <p className="text-muted mb-3">Web Developer & Designer</p>
                <div className="d-flex justify-content-center gap-3 mb-3">
                  <a
                    href="https://www.facebook.com/mnaofficialbd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ height: "32px", width: "32px" }}
                      src="https://i.ibb.co/SBMtMC1/facebook.png"
                      alt="Facebook"
                    />
                  </a>
                  <a
                    href="https://www.twitter.com/mnaofficialbd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ height: "32px", width: "32px" }}
                      src="https://i.ibb.co/j4T8qbd/twitter.png"
                      alt="Twitter"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/mnaofficialbd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ height: "32px", width: "32px" }}
                      src="https://i.ibb.co/DkFxTMF/instagram.png"
                      alt="Instagram"
                    />
                  </a>
                </div>
                <Button
                  variant="outline-primary"
                  href="mailto:mnaofficialbd@gmail.com"
                  className="fw-bold"
                >
                  Contact Me
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={7}>
            <Card className="shadow border-0 h-100">
              <Card.Body>
                <h4 className="text-danger fw-bold mb-3">About Me</h4>
                <div className="fs-5" style={{ lineHeight: 1.7 }}>
                  <p>
                    I am Mohammad Nurul Azam, a passionate web developer and
                    designer. I'm a student of BBS and Programming Hero.
                  </p>
                  <p>
                    I was born in the village of East Raozan Rashidarpara in
                    Raozan Upazila of Chittagong district on September 09, 1998.
                  </p>
                  <p>
                    I love to dream and strive to fulfill them. My hobbies
                    include design and programming, and I enjoy working on
                    creative projects.
                  </p>
                  <p>
                    I have a passion for learning and sharing knowledge with
                    others. Solving real-world problems excites me.
                  </p>
                  <p>
                    I also enjoy working on YouTube and design, and I run
                    several YouTube channels.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutDeveloper;
