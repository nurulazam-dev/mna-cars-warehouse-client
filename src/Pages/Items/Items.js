import React, { useState } from "react";
import { Link } from "react-router-dom";
import { items } from "../../assets/data/itemsData";
// import { useAuth } from "../../hooks/useAuth";

const badgeColors = {
  "New Arrival": "primary",
  Featured: "success",
  "Hot Deal": "danger",
  Special: "warning",
};

const uniqueBrands = [...new Set(items.map((item) => item.brand))].sort();
const uniqueColors = [...new Set(items.map((item) => item.color))].sort();

const minPrice = Math.min(...items.map((item) => item.price));
const maxPrice = Math.max(...items.map((item) => item.price));

const Items = () => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(maxPrice);
  const [transmission, setTransmission] = useState("");
  const [color, setColor] = useState("");

  const filteredItems = items.filter((item) => {
    return (
      (item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.brand.toLowerCase().includes(search.toLowerCase())) &&
      (brand ? item.brand === brand : true) &&
      (transmission ? item.transmission === transmission : true) &&
      (color ? item.color === color : true) &&
      item.price <= price
    );
  });

  /*  const { user, token } = useAuth();

  const handleAddWishlist = () => {
    const wishlistItem = {
      email: user?.email,
      title: product.title,
      description: product.description,
      productId: product._id,
    };
    addToWishlist(wishlistItem, token);
  }; */

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
               Items Grid
        ===================== */}
        <div className="row g-4">
          {filteredItems.length === 0 && (
            <div className="col-12 text-center text-danger fs-5">
              No items found matching your criteria.
            </div>
          )}
          {filteredItems.map((item, idx) => (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex"
              key={item.name + idx}
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
                    src={item.img}
                    alt={item.name}
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
                      badgeColors[item.badge]
                    } position-absolute top-0 start-0 m-3 px-3 py-2 fs-6 rounded-pill shadow`}
                    style={{ letterSpacing: "1px" }}
                  >
                    {item.badge}
                  </span>
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fw-bold mb-2">{item.name}</h5>
                  <ul className="list-unstyled mb-2">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="text-secondary small mb-1">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-2">
                    <span className="badge bg-light text-dark me-2">
                      {item.year}
                    </span>
                    <span className="badge bg-light text-dark me-2">
                      {item.mileage}
                    </span>
                    <span className="badge bg-light text-dark me-2">
                      {item.color}
                    </span>
                    <span className="badge bg-light text-dark">
                      {item.transmission}
                    </span>
                  </div>
                  <div className="mb-2 text-secondary small">
                    <i className="bi bi-geo-alt-fill text-primary me-1"></i>
                    {item.location}
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <span className="fw-bold fs-5 text-primary">
                      ${item?.price.toLocaleString()}
                    </span>
                    <Link
                      to={`/items/${item?._id}`}
                      className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold"
                      style={{ transition: "background 0.2s, color 0.2s" }}
                    >
                      View Details <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                    {/* <button
                      className="btn btn-warning"
                      onClick={handleAddWishlist}
                    >
                      Add to Wishlist
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* =====================
            Animate.css CDN
     ===================== */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </section>
  );
};

export default Items;
