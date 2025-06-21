import React, { useState } from "react";
import { cars } from "../../assets/data/carsData";
import { Link } from "react-router-dom";

const badgeColors = {
  "New Arrival": "primary",
  Featured: "success",
  "Hot Deal": "danger",
  Special: "warning",
};

const uniqueBrands = [...new Set(cars.map((car) => car.brand))].sort();
const uniqueColors = [...new Set(cars.map((car) => car.color))].sort();

const minPrice = Math.min(...cars.map((car) => car.price));
const maxPrice = Math.max(...cars.map((car) => car.price));

const FeaturedCars = () => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(maxPrice);
  const [transmission, setTransmission] = useState("");
  const [color, setColor] = useState("");

  const filteredCars = cars.filter((car) => {
    return (
      (car.name.toLowerCase().includes(search.toLowerCase()) ||
        car.brand.toLowerCase().includes(search.toLowerCase())) &&
      (brand ? car.brand === brand : true) &&
      (transmission ? car.transmission === transmission : true) &&
      (color ? car.color === color : true) &&
      car.price <= price
    );
  });

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(120deg, #f8fafc 60%, #e9f5ff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* =====================
           Search & Filter Bar
        ===================== */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="p-4 bg-white rounded-4 shadow-sm d-flex flex-wrap gap-3 align-items-center justify-content-between animate__animated animate__fadeInDown">
              <input
                type="text"
                className="form-control w-auto"
                style={{ minWidth: 180 }}
                placeholder="Search by name or brand"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <select
                className="form-select w-auto"
                style={{ minWidth: 140 }}
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="">All Brands</option>
                {uniqueBrands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <select
                className="form-select w-auto"
                style={{ minWidth: 140 }}
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <option value="">All Colors</option>
                {uniqueColors.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <select
                className="form-select w-auto"
                style={{ minWidth: 140 }}
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
              >
                <option value="">All Transmissions</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
              <div className="d-flex align-items-center gap-2">
                <label className="me-2 text-secondary small">Max Price:</label>
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="form-range"
                  style={{ width: 120 }}
                />
                <span className="fw-bold text-primary">
                  ${price.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* =====================
               Cars Grid
        ===================== */}
        <div className="row g-4">
          {filteredCars.length === 0 && (
            <div className="col-12 text-center text-danger fs-5">
              No cars found matching your criteria.
            </div>
          )}
          {filteredCars.map((car, idx) => (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex"
              key={car.name + idx}
            >
              <div
                className={`card border-0 shadow-lg rounded-4 w-100 animate__animated animate__fadeInUp`}
                style={{
                  animationDelay: `${idx * 0.08 + 0.1}s`,
                  background: "#fff",
                  minHeight: 440,
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}
              >
                <div className="position-relative">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="card-img-top rounded-top-4"
                    style={{
                      height: 180,
                      objectFit: "cover",
                      borderTopLeftRadius: "1.5rem",
                      borderTopRightRadius: "1.5rem",
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
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fw-bold mb-2">{car.name}</h5>
                  <ul className="list-unstyled mb-2">
                    {car.specs.map((spec, i) => (
                      <li key={i} className="text-secondary small mb-1">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-2">
                    <span className="badge bg-light text-dark me-2">
                      {car.year}
                    </span>
                    <span className="badge bg-light text-dark me-2">
                      {car.mileage}
                    </span>
                    <span className="badge bg-light text-dark me-2">
                      {car.color}
                    </span>
                    <span className="badge bg-light text-dark">
                      {car.transmission}
                    </span>
                  </div>
                  <div className="mb-2 text-secondary small">
                    <i className="bi bi-geo-alt-fill text-primary me-1"></i>
                    {car.location}
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <span className="fw-bold fs-5 text-primary">
                      ${car?.price.toLocaleString()}
                    </span>
                    <Link
                      to={`/cars/${car?._id}`}
                      className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold"
                      style={{ transition: "background 0.2s, color 0.2s" }}
                    >
                      View Details <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
