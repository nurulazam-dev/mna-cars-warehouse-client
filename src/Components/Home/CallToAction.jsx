import React from "react";

const CallToAction = () => {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(90deg, #2c5364 0%, #0f2027 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container position-relative z-2 pb-3">
        <div className="row justify-content-center">
          <div className="col-lg-9 text-center">
            <h2 className="fw-bold text-white mb-3 animate__animated animate__fadeInDown">
              Ready to Experience Your Next Car?
            </h2>
            <p className="fs-5 text-light mb-4 animate__animated animate__fadeIn animate__delay-1s">
              Book a test drive, get in touch with our team, or register now to
              unlock exclusive offers and updates from MNA Car Warehouse!
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3 animate__animated animate__fadeInUp animate__delay-2s">
              <a
                href="/contact"
                className="btn btn-light btn-lg rounded-pill px-4 fw-bold shadow-sm"
                style={{
                  color: "#2c5364",
                  minWidth: 170,
                  transition: "background 0.3s, color 0.3s",
                }}
              >
                <i className="bi bi-envelope-fill me-2"></i>Contact Us
              </a>
              <a
                href="/book-test-drive"
                className="btn btn-outline-light btn-lg rounded-pill px-4 fw-bold shadow-sm"
                style={{
                  minWidth: 170,
                  borderWidth: 2,
                  transition: "background 0.3s, color 0.3s",
                }}
              >
                <i className="bi bi-steering-wheel me-2"></i>Book Test Drive
              </a>
              <a
                href="/register"
                className="btn btn-success btn-lg rounded-pill px-4 fw-bold shadow-sm"
                style={{
                  minWidth: 170,
                  background:
                    "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
                  border: "none",
                }}
              >
                <i className="bi bi-person-plus-fill me-2"></i>Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ======================
         Decorative SVG wave
      ====================== */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,53.3C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default CallToAction;
