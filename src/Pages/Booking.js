import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { cars } from "../assets/data/carsData";

const Booking = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const carId = params.get("carId");
  const car = cars.find((c) => c._id === carId);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(120deg, #e9f5ff 60%, #f8fafc 100%)",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="mb-4">
          <Link
            to={car ? `/cars/${car._id}` : "/"}
            className="btn btn-outline-primary rounded-pill px-4"
          >
            <i className="bi bi-arrow-left me-2"></i>Back to Car Details
          </Link>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-7">
            <div
              className="bg-white rounded-4 shadow-lg p-5 animate__animated animate__fadeInUp"
              style={{
                position: "relative",
                overflow: "hidden",
                minHeight: 520,
              }}
            >
              {/* Animated floating car image */}
              {car && (
                <div
                  className="position-absolute top-0 end-0 me-4 mt-4 d-none d-lg-block animate__animated animate__fadeInRight"
                  style={{
                    zIndex: 1,
                    opacity: 0.08,
                    pointerEvents: "none",
                  }}
                >
                  <img
                    src={car.img}
                    alt={car.name}
                    style={{
                      width: 320,
                      maxWidth: "40vw",
                      filter: "blur(1px)",
                      transform: "rotate(-8deg) scaleX(-1)",
                    }}
                  />
                </div>
              )}
              <div style={{ position: "relative", zIndex: 2 }}>
                <h2 className="fw-bold mb-3 animate__animated animate__fadeInDown">
                  <i className="bi bi-calendar2-check text-primary me-2"></i>
                  Book Test Drive
                </h2>
                {car && (
                  <div className="mb-4 d-flex align-items-center gap-3 animate__animated animate__fadeInLeft">
                    <img
                      src={car.img}
                      alt={car.name}
                      style={{
                        width: 100,
                        height: 70,
                        objectFit: "cover",
                        borderRadius: 12,
                        boxShadow: "0 4px 16px #e9f5ff",
                        border: "2px solid #e9f5ff",
                      }}
                    />
                    <div>
                      <div className="fw-semibold fs-5">{car.name}</div>
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
                  >
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="you@email.com"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Preferred Date</label>
                        <input type="date" className="form-control" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Preferred Time</label>
                        <input type="time" className="form-control" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Location</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={car?.location || "Your City"}
                          defaultValue={car?.location}
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg rounded-pill px-4 w-100 mt-4 animate__animated animate__pulse animate__infinite"
                      style={{ letterSpacing: 1 }}
                    >
                      <i className="bi bi-send-check me-2"></i>
                      Confirm Booking
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-5 animate__animated animate__tada">
                    <i
                      className="bi bi-patch-check-fill text-success mb-3"
                      style={{ fontSize: 64 }}
                    ></i>
                    <h3 className="fw-bold mb-2 text-success">
                      Booking Confirmed!
                    </h3>
                    <p className="mb-4">
                      Thank you for booking a test drive
                      {car ? ` for the ${car.name}` : ""}.
                      <br />
                      Our team will contact you soon.
                    </p>
                    <Link
                      to="/"
                      className="btn btn-outline-primary rounded-pill px-4"
                    >
                      <i className="bi bi-house-door me-2"></i>
                      Back to Home
                    </Link>
                  </div>
                )}
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

export default Booking;
