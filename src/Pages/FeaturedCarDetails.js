import React from "react";
import { useParams, Link } from "react-router-dom";
import { cars } from "../assets/data/carsData";

const badgeColors = {
  "New Arrival": "primary",
  Featured: "success",
  "Hot Deal": "danger",
  Special: "warning",
};

const FeaturedCarDetails = () => {
  const { id } = useParams();
  const car = cars.find((c) => c._id === id);

  if (!car) {
    return (
      <div className="container py-5 text-center text-danger">
        Car not found.
      </div>
    );
  }

  return (
    <section
      className="py-4"
      style={{
        background: "linear-gradient(120deg, #e9f5ff 60%, #f8fafc 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="mb-2">
          <Link to="/" className="btn btn-outline-primary rounded-pill px-4">
            <i className="bi bi-arrow-left me-2"></i>Back to Cars
          </Link>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 animate__animated animate__fadeInLeft">
            <div
              className="bg-white rounded-4 shadow-lg p-3"
              style={{
                overflow: "hidden",
                position: "relative",
                minHeight: 420,
              }}
            >
              <img
                src={car.img}
                alt={car.name}
                className="img-fluid rounded-4 w-100 animate__animated animate__zoomIn"
                style={{
                  maxHeight: 380,
                  objectFit: "cover",
                  boxShadow: "0 8px 32px rgba(44,83,100,0.10)",
                }}
              />
              <span
                className={`badge bg-${
                  badgeColors[car.badge]
                } position-absolute top-0 start-0 m-3 px-3 py-2 fs-6 rounded-pill shadow`}
                style={{ letterSpacing: "1px" }}
              >
                {car.badge}
              </span>
            </div>
          </div>
          <div className="col-lg-6 animate__animated animate__fadeInRight">
            <div className="bg-white rounded-4 shadow-lg p-5 h-100">
              <h2 className="fw-bold mb-2">{car.name}</h2>
              <h4 className="text-primary mb-3">
                ${car.price.toLocaleString()}
              </h4>
              <div className="mb-3">
                <span className="badge bg-light text-dark me-2">
                  {car.year}
                </span>
                <span className="badge bg-light text-dark me-2">
                  {car.mileage}
                </span>
                <span className="badge bg-light text-dark me-2">
                  {car.color}
                </span>
                <span className="badge bg-light text-dark me-2">
                  {car.transmission}
                </span>
                <span className="badge bg-light text-dark">{car.brand}</span>
              </div>
              <div className="mb-3 text-secondary small">
                <i className="bi bi-geo-alt-fill text-primary me-1"></i>
                {car.location}
              </div>
              <ul className="list-unstyled mb-4">
                {car.specs.map((spec, i) => (
                  <li key={i} className="mb-2 fs-6">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    {spec}
                  </li>
                ))}
              </ul>
              <div className="d-flex gap-3 mt-4">
                <button className="btn btn-primary btn-lg rounded-pill px-4 animate__animated animate__pulse animate__infinite">
                  Book Test Drive
                </button>
                <button className="btn btn-outline-success btn-lg rounded-pill px-4">
                  Contact Dealer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Animate.css CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </section>
  );
};

export default FeaturedCarDetails;
