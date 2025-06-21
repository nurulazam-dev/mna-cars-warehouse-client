import React from "react";

const Newsletter = () => {
  return (
    <section
      className="py-4"
      style={{
        background: "linear-gradient(120deg, #e9f5ff 60%, #c9e7fa 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-3 animate__animated animate__fadeInDown">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-secondary fs-5 mb-4 animate__animated animate__fadeIn animate__delay-1s">
              Join our community and get exclusive car warehouse deals, news,
              and tips straight to your inbox!
            </p>
            <form
              className="row g-2 justify-content-center align-items-center animate__animated animate__fadeInUp animate__delay-2s"
              style={{
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 24px rgba(44,83,100,0.08)",
                padding: "18px 12px",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              <div className="col-12 col-md-7 mb-2 mb-md-0">
                <input
                  type="email"
                  className="form-control form-control-lg rounded border-0 shadow-sm"
                  placeholder="Enter your email address"
                  required
                  style={{ background: "#f5f7fa" }}
                />
              </div>
              <div className="col-12 col-md-5 text-md-start text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-pill px-4 fw-bold w-100"
                  style={{
                    background:
                      "linear-gradient(90deg, #2c5364 0%, #0f2027 100%)",
                    border: "none",
                  }}
                >
                  <i className="bi bi-send-fill me-2"></i>Subscribe
                </button>
              </div>
            </form>
            <div className="mt-3 small text-secondary animate__animated animate__fadeIn animate__delay-3s">
              <i className="bi bi-shield-lock text-success"></i> We respect your
              privacy. No spam ever.
            </div>
          </div>
        </div>
      </div>
      {/* Decorative SVG wave */}
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
            fill="#c9e7fa"
            d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,53.3C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Newsletter;
