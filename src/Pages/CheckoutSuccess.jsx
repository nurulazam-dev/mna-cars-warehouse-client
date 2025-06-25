import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "../assets/images/icon/mna-car-warehouse.png";

const CheckoutSuccess = () => {
  return (
    <section>
      <div className="d-flex">
        <img
          src={brandLogo}
          alt="MNA Car Warehouse"
          style={{ width: "100px", maxWidth: "230px" }}
        />
      </div>
      <div>
        <h2>Payment Done</h2>
        <p> Thank you for completing your secure online payment!</p>
        <h6>Have a great day!</h6>
        <Link to="/home" className="btn btn-primary w-100 py-2">
          Go Back To Home
        </Link>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
