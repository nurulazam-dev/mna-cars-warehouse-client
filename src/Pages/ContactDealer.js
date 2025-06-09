import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { cars } from "../assets/data/carsData";

const ContactDealer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const carId = params.get("carId");
  const car = cars.find((c) => c._id === carId);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="py-4"
      style={{
        background: "linear-gradient(120deg, #f8fafc 60%, #e9f5ff 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="mb-2">
          <Link
            to={car ? `/cars/${car._id}` : "/"}
            className="btn btn-outline-primary rounded-pill px-4"
          >
            <i className="bi bi-arrow-left me-2"></i>Back to Car Details
          </Link>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-7">
            <div className="bg-white rounded-4 shadow-lg p-5 animate__animated animate__fadeInUp">
              <h2 className="fw-bold mb-3 text-center">
                <i className="bi bi-person-lines-fill text-success me-2"></i>
                Contact Dealer
              </h2>
              {car && (
                <div className="mb-4 d-flex align-items-center gap-3 justify-content-center">
                  <img
                    src={car.img}
                    alt={car.name}
                    style={{
                      width: 90,
                      height: 60,
                      objectFit: "cover",
                      borderRadius: 10,
                      boxShadow: "0 4px 16px #e9f5ff",
                      border: "2px solid #e9f5ff",
                    }}
                  />
                  <div>
                    <div className="fw-semibold">{car.name}</div>
                    <div className="text-secondary small">
                      {car.brand} • {car.year} • {car.color}
                    </div>
                  </div>
                </div>
              )}
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="animate__animated animate__fadeIn"
                  style={{ maxWidth: 480, margin: "0 auto" }}
                >
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Full Name
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light">
                          <i className="bi bi-person"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Email Address
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light">
                          <i className="bi bi-envelope"></i>
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="you@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">Message</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="Type your message to the dealer..."
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success btn-lg rounded-pill px-4 w-100 mt-4 animate__animated animate__pulse animate__infinite"
                    style={{ letterSpacing: 1, fontWeight: 600 }}
                  >
                    <i className="bi bi-send me-2"></i>
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-5 animate__animated animate__tada">
                  <i
                    className="bi bi-patch-check-fill text-success mb-3"
                    style={{ fontSize: 64 }}
                  ></i>
                  <h3 className="fw-bold mb-2 text-success">Message Sent!</h3>
                  <p className="mb-4">
                    Thank you for contacting the dealer
                    {car ? ` about the ${car.name}` : ""}.<br />
                    The dealer will reach out to you soon.
                  </p>
                  <button
                    className="btn btn-outline-primary rounded-pill px-4"
                    onClick={() => navigate("/")}
                  >
                    <i className="bi bi-house-door me-2"></i>
                    Back to Home
                  </button>
                </div>
              )}
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

export default ContactDealer;
