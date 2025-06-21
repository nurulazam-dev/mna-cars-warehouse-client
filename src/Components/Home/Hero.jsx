import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/images/icon/mna-car-warehouse.png";

const Hero = () => {
  return (
    <section
      className="position-relative overflow-hidden"
      style={{
        background: "linear-gradient(120deg, #e9f5ff 60%, #f8fafc 100%)",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* ==============
               Left side
          ============== */}
          <div className="col-lg-6 animate__animated animate__fadeInLeft">
            <h1
              className="display-4 fw-bold mb-3"
              style={{ letterSpacing: 1.5 }}
            >
              Welcome to <span className="text-primary">MNA Car Warehouse</span>
            </h1>
            <p className="lead text-secondary mb-4" style={{ maxWidth: 500 }}>
              Discover the best selection of new and used cars, all in one
              place. Find your dream car with advanced search, detailed specs,
              and trusted dealers.
            </p>
            <div className="d-flex gap-3">
              <Link
                to="/items"
                className="btn btn-primary btn-lg rounded-pill px-4 animate__animated animate__pulse animate__infinite"
                style={{ fontWeight: 600, letterSpacing: 1 }}
              >
                Explore Cars
              </Link>
              <a
                href="#featured"
                className="btn btn-outline-primary btn-lg rounded-pill px-4"
                style={{ fontWeight: 500 }}
              >
                Featured Cars
              </a>
            </div>
          </div>
          {/* ==============
              Right side
          ============== */}
          <div className="col-lg-6 text-center animate__animated animate__fadeInRight">
            <div className="position-relative">
              <img
                src={brandLogo}
                alt="Warehouse Car"
                className="img-fluid"
                style={{
                  maxHeight: 340,
                  filter: "drop-shadow(0 12px 32px rgba(44,83,100,0.12))",
                  animation: "floatCarHero 3s ease-in-out infinite alternate",
                }}
              />
              {/* ==============
              Decorative shapes
              ============== */}
              <span
                className="position-absolute rounded-circle"
                style={{
                  width: 80,
                  height: 80,
                  background: "#e9f5ff",
                  left: -30,
                  top: 30,
                  zIndex: 0,
                  opacity: 0.7,
                  animation: "heroBubble 4s infinite alternate",
                }}
              ></span>
              <span
                className="position-absolute rounded-circle"
                style={{
                  width: 40,
                  height: 40,
                  background: "#38bdf8",
                  right: -20,
                  bottom: 40,
                  zIndex: 0,
                  opacity: 0.5,
                  animation: "heroBubble 5s 1s infinite alternate",
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
      {/* ==============
      Custom Animations
      ============== */}
      <style>
        {`
          @keyframes floatCarHero {
            0% { transform: translateY(0) scaleX(1) rotate(-3deg);}
            100% { transform: translateY(-22px) scaleX(1) rotate(-3deg);}
          }
          @keyframes heroBubble {
            0% { transform: scale(1);}
            100% { transform: scale(1.18);}
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
