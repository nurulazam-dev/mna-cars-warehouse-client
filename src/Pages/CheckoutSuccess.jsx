import { Link } from "react-router-dom";
import brandLogo from "../assets/images/icon/mna-car-warehouse.png";

const CheckoutSuccess = () => {
  return (
    <section className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="w-100 text-center" style={{ maxWidth: "550px" }}>
        <div className="d-flex align-items-center justify-content-center mb-2">
          <img
            src={brandLogo}
            alt="MNA Car Warehouse"
            style={{ width: "200px", maxWidth: "230px" }}
          />
        </div>
        <div className="mb-4">
          <h2 className="text-success fs-2">Payment Done</h2>
          <p className="m-0">
            {" "}
            Thank you for completing your secure online payment!
          </p>
          <h6>Have a great day!</h6>
        </div>
        <Link to="/home" className="btn btn-primary w-100 py-2">
          Go Back To Home
        </Link>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
