import React from "react";
import { useLocation, Link } from "react-router-dom";
import { cars } from "../assets/data/carsData";

const Booking = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const carId = params.get("carId");
  const car = cars.find((c) => c._id === carId);

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(120deg, #f8fafc 60%, #e9f5ff 100%)",
        minHeight: "100vh",
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
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="bg-white rounded-4 shadow-lg p-5 animate__animated animate__fadeIn">
              <h2 className="fw-bold mb-3">Book Test Drive</h2>
              {car && (
                <div className="mb-4 d-flex align-items-center gap-3">
                  <img
                    src={car.img}
                    alt={car.name}
                    style={{
                      width: 100,
                      height: 70,
                      objectFit: "cover",
                      borderRadius: 12,
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
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="you@email.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Preferred Date</label>
                  <input type="date" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Preferred Time</label>
                  <input type="time" className="form-control" required />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-pill px-4 w-100 mt-2 animate__animated animate__pulse animate__infinite"
                >
                  Confirm Booking
                </button>
              </form>
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
