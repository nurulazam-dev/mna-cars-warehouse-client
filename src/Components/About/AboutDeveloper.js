import { Card, Row, Col, Button } from "react-bootstrap";

const AboutDeveloper = () => {
  return (
    <div
      className="container py-3 animate__animated animate__fadeIn"
      style={{ minHeight: "100vh" }}
    >
      <h1 className="text-center text-secondary mb-4 fw-bold">
        About the Developer
      </h1>
      <Row className="justify-content-center animate__animated animate__fadeInUp">
        <Col md={5} className="mb-4">
          <Card className="shadow border-0 text-center p-3">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/jD3tCd4/mna.png"
              alt="Developer"
              className="rounded-circle mx-auto"
              style={{
                width: "155px",
                height: "180px",
                objectFit: "cover",
                marginTop: "-60px",
                border: "4px solid #fff",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            />
            <Card.Body>
              <h3 className="text-success fw-bold mb-1">Mohammad Nurul Azam</h3>
              <p className="text-muted mb-0">Web Developer & Designer</p>
              <button
                className="mb-3 text-primary border-0 bg-transparent"
                onClick={() =>
                  (window.location.href = "mailto:nurulazam.dev@gmail.com")
                }
              >
                nurulazam.dev@gmail.com
              </button>
              <div className="d-flex justify-content-center gap-3 mb-3">
                <a
                  href="https://nurulazam-dev.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ height: "32px", width: "32px" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                    alt="Portfolio"
                  />
                </a>
                <a
                  href="https://github.com/nurulazam-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ height: "32px", width: "32px" }}
                    src="https://img.icons8.com/m_outlined/512/github.png"
                    alt="GitHub"
                  />
                </a>
                <a
                  href="https://www.facebook.com/nurulazam.dev"
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
                  href="https://www.twitter.com/nurulazam_dev"
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
                  href="https://www.instagram.com/nurulazam_dev"
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
                href="mailto:nurulazam.dev@gmail.com"
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
              <div className="fs-6 p-3" style={{ lineHeight: 1.8 }}>
                <p style={{ fontSize: "1rem", textAlign: "justify" }}>
                  I'm <strong>𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐍𝐮𝐫𝐮𝐥 𝐀𝐳𝐚𝐦</strong>. I'm working as a{" "}
                  <strong>𝐅𝐮𝐥𝐥 𝐒𝐭𝐚𝐜𝐤 (𝐌𝐄𝐑𝐍) 𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫</strong> for more than
                  4 years. As a MERN stack web developer, I specialize in
                  building dynamic and responsive web applications using the
                  MERN (MongoDB, Express.js, React.js, Node.js) technology
                  stack. With expertise in both frontend and backend
                  development, I craft efficient and user-friendly interfaces
                  while ensuring seamless data flow and robust server-side
                  functionality. Client's satisfaction is the best priority for
                  me. Thank You.
                </p>
                <h4 className="fw-bold fs-4 border-bottom text-primary">
                  Skills:
                </h4>
                <ul>
                  <li>
                    {" "}
                    <strong>Frontend:</strong> HTML, CSS, JavaScript, React.js,
                    React Router, ES6, Bootstrap5, Tailwind CSS, DaisyUi,
                    MaterialUI, etc.
                  </li>
                  <li>
                    {" "}
                    <strong>Backend:</strong> Node.js, Express.js
                  </li>
                  <li>
                    {" "}
                    <strong>Database:</strong> MongoDB, Mongoose
                  </li>
                  <li>
                    {" "}
                    <strong>API:</strong> RESTful APIs
                  </li>
                  <li>
                    {" "}
                    <strong>Design:</strong> Responsive Web Design
                  </li>
                  <li>
                    {" "}
                    <strong>Version Control:</strong> Version Control (Git)
                  </li>
                  <li>
                    {" "}
                    <strong>Tools:</strong> GitHub, Netlify, Heroku, Visual
                    Studio Code
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutDeveloper;
