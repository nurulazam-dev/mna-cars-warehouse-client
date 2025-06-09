import React from "react";
import { useParams } from "react-router-dom";
import { cars } from "../assets/data/carsData";

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
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-6">
          <img
            src={car.img}
            alt={car.name}
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: 400, objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{car.name}</h2>
          <span className={`badge bg-primary mb-3`}>{car.badge}</span>
          <h4 className="text-primary mb-3">${car.price.toLocaleString()}</h4>
          <ul className="list-unstyled mb-3">
            {car.specs.map((spec, i) => (
              <li key={i} className="mb-1">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                {spec}
              </li>
            ))}
          </ul>
          <div className="mb-2">
            <span className="badge bg-light text-dark me-2">{car.year}</span>
            <span className="badge bg-light text-dark me-2">{car.mileage}</span>
            <span className="badge bg-light text-dark me-2">{car.color}</span>
            <span className="badge bg-light text-dark">{car.transmission}</span>
          </div>
          <div className="mb-2 text-secondary small">
            <i className="bi bi-geo-alt-fill text-primary me-1"></i>
            {car.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarDetails;
