import { Link, useParams } from "react-router-dom";
import { useItem } from "../../hooks/useItem";
import Loader from "../../Components/Shared/Loader/Loader";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../../config";

const badgeColors = {
  "New Arrival": "primary",
  Featured: "success",
  "Hot Deal": "danger",
  Special: "warning",
};

const ItemDetails = () => {
  const { id } = useParams();
  const { item, loading } = useItem(id);
  const { user, token } = useAuth();
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const checkoutHandler = async () => {
    if (!user || !token) {
      return toast.error("You must be logged in to proceed.");
    }
    setCheckoutLoading(true);
    try {
      const response = await fetch(
        `${LOCAL_BASE_URL}/orders/checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            items: [
              {
                productId: item?.productId || item?._id,
                title: item?.name,
                price: item?.price,
                quantity: 1,
                img: item?.img,
                brand: item?.brand,
                supplierEmail: item?.supplierEmail || "",
              },
            ],
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(data?.message || "Checkout failed.");
      }

      if (data?.url) {
        window.location.href = data.url;
      } else {
        toast.success("Order placed successfully.");
        window.location.href = "/checkout-success";
      }
    } catch (err) {
      toast.error(err.message || "Checkout failed.");
    }
    setCheckoutLoading(false);
  };

  if (!item) {
    return (
      <div className="container py-5 text-center text-danger">
        Item not found.
      </div>
    );
  }

  return (
    <section
      className="py-4"
      style={{
        background: "linear-gradient(120deg, #e9f5ff 60%, #f8fafc 100%)",
        minHeight: "100vh",
      }}
    >
      {loading && <Loader />}
      <div className="container">
        <div className="mb-2">
          <Link
            to="/items"
            className="btn btn-outline-primary rounded-pill px-4"
          >
            <i className="bi bi-arrow-left me-2"></i>Back to Items
          </Link>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 animate__animated animate__fadeInLeft">
            <div
              className="bg-white rounded-4 shadow-lg p-3"
              style={{
                overflow: "hidden",
                position: "relative",
                minHeight: 420,
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="img-fluid rounded-4 w-100 animate__animated animate__zoomIn"
                style={{
                  maxHeight: 380,
                  objectFit: "cover",
                  boxShadow: "0 8px 32px rgba(44,83,100,0.10)",
                }}
              />
              <span
                className={`badge bg-${
                  badgeColors[item.badge]
                } position-absolute top-0 start-0 m-3 px-3 py-2 fs-6 rounded-pill shadow`}
                style={{ letterSpacing: "1px" }}
              >
                {item.badge}
              </span>
            </div>
          </div>
          <div className="col-lg-6 animate__animated animate__fadeInRight">
            <div className="bg-white rounded-4 shadow-lg p-5 h-100">
              <h2 className="fw-bold mb-2">{item.name}</h2>
              <h4 className="text-primary mb-3">
                ${item.price.toLocaleString()}
              </h4>
              <div className="mb-3">
                <span className="badge bg-light text-dark me-2">
                  {item.year}
                </span>
                <span className="badge bg-light text-dark me-2">
                  {item.mileage}
                </span>
                <span className="badge bg-light text-dark me-2">
                  {item.color}
                </span>
                <span className="badge bg-light text-dark me-2">
                  {item.transmission}
                </span>
                <span className="badge bg-light text-dark">{item.brand}</span>
              </div>
              <div className="mb-3 text-secondary small">
                <i className="bi bi-geo-alt-fill text-primary me-1"></i>
                {item.location}
              </div>
              <ul className="list-unstyled mb-4">
                {item.specs.map((spec, i) => (
                  <li key={i} className="mb-2 fs-6">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    {spec}
                  </li>
                ))}
              </ul>
              <div className="d-flex gap-3 mt-4">
                <button
                  onClick={checkoutHandler}
                  disabled={checkoutLoading}
                  className="btn btn-primary btn-lg rounded-pill p2-4 animate__animated animate__pulse animate__infinite"
                >
                  {checkoutLoading ? "Processing..." : "Continue to Checkout"}
                </button>
                <Link
                  to={`/contact-dealer?itemId=${item._id}`}
                  className="btn btn-outline-success btn-lg rounded-pill px-4"
                >
                  Contact Dealer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;
