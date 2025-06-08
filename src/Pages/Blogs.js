import React from "react";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";

const blogPosts = [
  {
    title: "How to Choose the Right Used Car from a Warehouse",
    date: "June 2025",
    tag: "Buying Tips",
    image:
      "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=600&q=80",
    content: (
      <>
        <p>
          Choosing the right used car can be overwhelming. At MNA Car Warehouse,
          we recommend starting with a clear budget and a list of must-have
          features. Always check the vehicle’s service history, mileage, and
          condition. Don’t hesitate to ask for a test drive and a full
          inspection report.
        </p>
        <ul>
          <li>Set your budget and stick to it</li>
          <li>Research models that fit your needs</li>
          <li>Inspect the car’s history and maintenance records</li>
          <li>Test drive before making a decision</li>
        </ul>
      </>
    ),
  },
  {
    title: "Benefits of Buying from a Car Warehouse",
    date: "June 2025",
    tag: "Warehouse Advantage",
    image:
      "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=600&q=80",
    content: (
      <>
        <p>
          Car warehouses offer a wide selection of vehicles at competitive
          prices. Unlike traditional dealerships, warehouses often have lower
          overhead costs, which means better deals for you. Plus, you can
          compare multiple brands and models in one place.
        </p>
        <ul>
          <li>Wide variety of vehicles</li>
          <li>Competitive pricing</li>
          <li>One-stop solution for all brands</li>
          <li>Transparent buying process</li>
        </ul>
      </>
    ),
  },
  {
    title: "Warehouse vs. Dealership: What’s the Difference?",
    date: "June 2025",
    tag: "Comparison",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80",
    content: (
      <>
        <p>
          Warehouses focus on volume and variety, while dealerships may
          specialize in specific brands. Warehouses usually offer fixed prices
          and a no-haggle experience, making the process faster and more
          transparent. Dealerships may offer more financing options, but
          warehouses often have better upfront deals.
        </p>
        <ul>
          <li>Warehouses: More choices, lower prices, quick process</li>
          <li>Dealerships: Brand expertise, more financing options</li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Inspect and Prepare Our Cars",
    date: "June 2025",
    tag: "Our Process",
    image:
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=600&q=80",
    content: (
      <>
        <p>
          Every car at MNA Car Warehouse undergoes a rigorous inspection and
          reconditioning process. Our certified mechanics check all major
          systems, perform necessary repairs, and ensure each vehicle meets our
          quality standards before it’s listed for sale.
        </p>
        <ul>
          <li>Multi-point inspection</li>
          <li>Professional cleaning and detailing</li>
          <li>Service and maintenance updates</li>
          <li>Warranty and after-sales support</li>
        </ul>
      </>
    ),
  },
];

const Blogs = () => {
  return (
    <div
      style={{
        background: "#f8f9fa",
        minHeight: "100vh",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <Container>
        <h2 className="text-center mb-5 fw-bold text-primary">
          Warehouse Blog & Tips
        </h2>
        <Row xs={1} md={2} className="g-4">
          {blogPosts.map((post, idx) => (
            <Col key={idx}>
              <Card className="h-100 shadow border-0 blog-card">
                <div
                  style={{
                    overflow: "hidden",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={post.image}
                    alt={post.title}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                      transition: "transform 0.3s",
                    }}
                    className="blog-card-img"
                  />
                </div>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Badge bg="success" className="fs-6">
                      {post.tag}
                    </Badge>
                    <span className="text-muted small">{post.date}</span>
                  </div>
                  <Card.Title className="fw-bold fs-4 mb-3 text-dark">
                    {post.title}
                  </Card.Title>
                  <Card.Text className="fs-6">{post.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <style>
        {`
          .blog-card:hover .blog-card-img {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default Blogs;
