import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { items } from "../../assets/data/itemsData";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const itemId = params.get("itemId");
  const item = items.find((i) => i._id === itemId);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="py-4"
      style={{
        background: "linear-gradient(120deg, #e9f5ff 60%, #f8fafc 100%)",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="mb-2">
          <Link
            to={item ? `/items/${item._id}` : "/"}
            className="btn btn-outline-primary rounded-pill px-4"
          >
            <i className="bi bi-arrow-left me-2"></i>Back to Item Details
          </Link>
        </div>
        <div className="row justify-content-center align-items-stretch g-4">
          {/* ==============
              Info Side
          ============== */}
          <div className="col-lg-5 d-flex align-items-stretch">
            <div
              className="bg-white rounded-4 shadow-lg p-4 w-100 animate__animated animate__fadeInLeft"
              style={{
                minHeight: 520,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {item && (
                <>
                  <div className="text-center mb-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="img-fluid rounded-4 shadow"
                      style={{
                        maxHeight: 220,
                        objectFit: "cover",
                        border: "3px solid #e9f5ff",
                        background: "#f8fafc",
                        animation:
                          "floatCar 2.5s ease-in-out infinite alternate",
                      }}
                    />
                  </div>
                  <h3 className="fw-bold mb-2 text-center">{item.name}</h3>
                  <div className="text-center mb-3">
                    <span className="badge bg-primary me-2">{item.brand}</span>
                    <span className="badge bg-light text-dark me-2">
                      {item.year}
                    </span>
                    <span className="badge bg-light text-dark me-2">
                      {item.color}
                    </span>
                    <span className="badge bg-light text-dark">
                      {item.transmission}
                    </span>
                  </div>
                  <h4 className="text-primary text-center mb-3">
                    ${item.price.toLocaleString()}
                  </h4>
                  <ul className="list-unstyled mb-3 text-center">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="mb-1">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="text-secondary text-center small mb-2">
                    <i className="bi bi-geo-alt-fill text-primary me-1"></i>
                    {item.location}
                  </div>
                </>
              )}
            </div>
          </div>
          {/* ==============
              Form Side
          ============== */}
          <div className="col-lg-7 d-flex align-items-stretch">
            <div
              className="bg-white rounded-4 shadow-lg py-4 w-100 animate__animated animate__fadeInRight"
              style={{
                minHeight: 520,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div style={{ position: "relative", zIndex: 2 }}>
                <h2 className="fw-bold mb-3 text-center animate__animated animate__fadeInDown">
                  <i className="bi bi-calendar2-check text-primary me-2"></i>
                  Book Test Drive
                </h2>
                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="animate__animated animate__fadeIn"
                    style={{ maxWidth: 550, margin: "0 auto" }}
                  >
                    <div className="row g-3">
                      {/* ==================
                        Full Name & Email
                      ================== */}
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
                      {/* ==================
                      Phone & Preferred Date
                      ================== */}
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Phone Number
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">
                            <i className="bi bi-telephone"></i>
                          </span>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Preferred Date
                        </label>
                        <input type="date" className="form-control" required />
                      </div>
                      {/* =======================
                      Preferred Time & Location
                      ======================= */}
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Preferred Time
                        </label>
                        <input type="time" className="form-control" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Location
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">
                            <i className="bi bi-geo-alt"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={item?.location || "Your City"}
                            defaultValue={item?.location}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg rounded-pill px-4 w-100 mt-4 animate__animated animate__pulse animate__infinite"
                      style={{ letterSpacing: 1, fontWeight: 600 }}
                    >
                      <i className="bi bi-send-check me-2"></i>
                      Confirm Booking
                    </button>
                  </form>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {/* =======================
        Confirmation Popup Modal
        ======================= */}
        {submitted && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
            style={{
              background: "rgba(255,255,255,0.95)",
              zIndex: 9999,
              left: 0,
              top: 0,
            }}
          >
            <div
              className="bg-white rounded-4 shadow-lg p-5 animate__animated animate__zoomIn"
              style={{
                minWidth: 340,
                maxWidth: 400,
                textAlign: "center",
              }}
            >
              <i
                className="bi bi-patch-check-fill text-success mb-3 animate__animated animate__bounceIn"
                style={{ fontSize: 72 }}
              ></i>
              <h3 className="fw-bold mb-2 text-success animate__animated animate__fadeInDown">
                Booking Confirmed!
              </h3>
              <p className="mb-4 animate__animated animate__fadeInUp">
                Thank you for booking a test drive
                {item ? ` for the ${item.name}` : ""}.<br />
                Our team will contact you soon.
              </p>
              <button
                className="btn btn-outline-primary rounded-pill px-4 animate__animated animate__pulse"
                onClick={() => navigate("/")}
              >
                <i className="bi bi-house-door me-2"></i>
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
      {/* =======================
             Animate.css CDN
      ======================= */}
      <style>
        {`
          @keyframes floatCar {
            0% { transform: translateY(0) scaleX(1) rotate(-8deg);}
            100% { transform: translateY(-18px) scaleX(1) rotate(-8deg);}
          }
        `}
      </style>
    </section>
  );
};

export default Booking;
