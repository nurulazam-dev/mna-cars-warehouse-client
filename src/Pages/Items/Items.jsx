import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useItems } from "../../hooks/useItems";
import Loader from "../../Components/Shared/Loader/Loader";
import { useAuth } from "../../hooks/useAuth";
import { useWishlist } from "../../hooks/useWishlist";

const Items = () => {
  const { user, token } = useAuth();
  const { items, loading } = useItems();
  const { addToWishlistItem } = useWishlist();

  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(900000);
  const [transmission, setTransmission] = useState("");
  const [color, setColor] = useState("");

  const uniqueBrands = useMemo(
    () => [...new Set(items?.map((i) => i.brand))].sort(),
    [items]
  );
  const uniqueColors = useMemo(
    () => [...new Set(items?.map((i) => i.color))].sort(),
    [items]
  );
  const minPrice = useMemo(
    () => Math.min(...items?.map((i) => i.price)),
    [items]
  );
  const maxPrice = useMemo(
    () => Math.max(...items?.map((i) => i.price)),
    [items]
  );

  const filteredItems = useMemo(() => {
    return items?.filter(
      (item) =>
        (item.name?.toLowerCase().includes(search.toLowerCase()) ||
          item.brand?.toLowerCase().includes(search.toLowerCase())) &&
        (!brand || item.brand === brand) &&
        (!transmission || item.transmission === transmission) &&
        (!color || item.color === color) &&
        item.price <= price
    );
  }, [items, search, brand, transmission, color, price]);

  const badgeColors = {
    "New Arrival": "primary",
    Featured: "success",
    "Hot Deal": "danger",
    Special: "warning",
  };

  const handleAddWishlist = (item) => {
    if (!user) return alert("Please login to add items to your wishlist.");
    const wishlistItem = {
      email: user.email,
      title: item?.title || item?.name,
      brand: item?.brand,
      supplierEmail: item?.supplierEmail,
      price: item?.price,
      img: item?.img,
      productId: item?._id,
    };
    addToWishlistItem(wishlistItem, token);
  };

  return (
    <section
      className="py-2"
      style={{
        background: "linear-gradient(120deg, #f8fafc 60%, #e9f5ff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mb-2">
          <h2 className="text-center text-primary fw-bold me-3">
            Inventory Items
          </h2>
          <span className="badge text-success border fs-6 px-2 py-2">
            Search Results: {filteredItems?.length || 0}
          </span>
        </div>

        {loading && <Loader />}

        {!loading && (
          <>
            {items?.length === 0 ? (
              <p className="text-center text-danger">No items found.</p>
            ) : (
              <>
                {/* ========== Filter Bar ========== */}
                <div className="row mb-4">
                  <div className="col-12">
                    <div className="p-4 bg-white rounded-4 shadow-sm d-flex flex-wrap gap-3 align-items-center justify-content-between animate__animated animate__fadeInDown">
                      <input
                        type="text"
                        className="form-control w-auto"
                        style={{ minWidth: 160 }}
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

                      <div className="d-flex align-items-center gap-1">
                        <label className="me-2 text-secondary small">
                          Max Price:
                        </label>
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
                          ${price?.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ========== Items Grid ========== */}
                <div className="row g-4">
                  {filteredItems?.length === 0 ? (
                    <div className="col-12 text-center text-danger fs-5">
                      No items found matching your criteria.
                    </div>
                  ) : (
                    filteredItems.map((item, idx) => (
                      <div
                        className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex"
                        key={item?._id || idx}
                      >
                        <div
                          className="card border-0 shadow-lg rounded-4 w-100 animate__animated animate__fadeInUp"
                          style={{
                            animationDelay: `${idx * 0.08 + 0.1}s`,
                            background: "#fff",
                            minHeight: 440,
                            transition: "box-shadow 0.3s, transform 0.3s",
                          }}
                        >
                          <div className="position-relative">
                            <img
                              src={item?.img}
                              alt={item?.name}
                              className="card-img-top rounded-top-4"
                              style={{ height: 180, objectFit: "cover" }}
                            />
                            {item?.badge && (
                              <span
                                className={`badge bg-${
                                  badgeColors[item?.badge]
                                } position-absolute top-0 start-0 m-2 px-3 py-2 fs-6 rounded-pill shadow`}
                                style={{ letterSpacing: "1px" }}
                              >
                                {item?.badge}
                              </span>
                            )}
                          </div>

                          <div className="card-body d-flex flex-column justify-content-between">
                            <h5 className="card-title fw-bold mb-2">
                              {item?.name}
                            </h5>
                            <h6 className="fw-bold fs-5 text-primary">
                              ${item?.price?.toLocaleString()}
                            </h6>

                            <ul className="list-unstyled mb-2">
                              {item?.specs?.map((spec, i) => (
                                <li
                                  key={i}
                                  className="text-secondary small mb-1"
                                >
                                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                                  {spec}
                                </li>
                              ))}
                            </ul>

                            <div className="mb-2">
                              <span className="badge bg-light text-dark me-2">
                                {item?.year}
                              </span>
                              <span className="badge bg-light text-dark me-2">
                                {item?.mileage}
                              </span>
                              <span className="badge bg-light text-dark me-2">
                                {item?.color}
                              </span>
                              <span className="badge bg-light text-dark">
                                {item?.transmission}
                              </span>
                            </div>

                            <div className="mb-2 text-secondary small">
                              <i className="bi bi-geo-alt-fill text-primary me-1"></i>
                              {item?.location}
                            </div>

                            <div className="d-flex align-items-center justify-content-between mt-auto">
                              <button
                                className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold"
                                onClick={() => handleAddWishlist(item)}
                              >
                                + Wishlist
                              </button>
                              <Link
                                to={`/items/${item?._id}`}
                                className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold"
                              >
                                View Details{" "}
                                <i className="bi bi-arrow-right ms-1"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Items;
