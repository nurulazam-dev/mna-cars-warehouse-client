import { useWishlist } from "../../../hooks/useWishlist";
import { useAuth } from "../../../hooks/useAuth";
import Loader from "../../Shared/Loader/Loader";
import { LOCAL_BASE_URL } from "../../../config";
import { toast } from "react-toastify";

const MyWishlist = () => {
  const { user, token } = useAuth();
  const { wishlist, loading, deleteWishlistItem } = useWishlist(
    user?.email,
    token
  );

  const subtotal = wishlist?.reduce((acc, item) => acc + (item?.price || 0), 0);

  const checkoutHandler = async () => {
    if (!wishlist || wishlist.length === 0) {
      return toast.error("Your wishlist is empty.");
    }

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
            email: user?.email,
            items: wishlist.map((item) => ({
              productId: item?.productId || item?._id,
              title: item?.title,
              price: item?.price,
              quantity: 1,
              img: item?.img,
              brand: item?.brand,
              supplierEmail: item?.supplierEmail || "",
            })),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Checkout failed.");
      }

      if (data?.session?.url) {
        // Stripe checkout session
        window.location.href = data.session.url;
      } else {
        toast.success("Order placed successfully.");
        // Optionally, clear wishlist or redirect
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (loading) return <Loader />;

  return (
    <section className="container">
      <h2 className="text-center mb-2 text-primary fw-bold">My Wishlist</h2>

      {wishlist?.length === 0 ? (
        <p className="text-center text-danger fs-5">Your wishlist is empty.</p>
      ) : (
        <div className="row border bg-white p-3 rounded shadow-sm">
          {/* ============
            Wishlist Items
            ============ */}
          <div className="col-lg-8 border-end">
            <h4 className="mb-3 text-muted">
              Wishlist Items{" "}
              <span className="text-primary">({wishlist.length})</span>
            </h4>

            {wishlist.map((item) => (
              <div className="card mb-3 shadow-sm" key={item?._id}>
                <div className="row g-0 align-items-center p-3">
                  <div className="col-md-2">
                    <img
                      src={item?.img}
                      alt={item?.title}
                      className="img-fluid rounded"
                      style={{ height: 60, objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-7 ps-3">
                    <h5 className="mb-1 fw-semibold fs-6">{item?.title}</h5>
                    <div className="text-secondary small">
                      Brand: {item?.brand || "N/A"} <br />
                      Supplier: {item?.supplierEmail || "N/A"}
                    </div>
                  </div>
                  <div className="col-md-3 text-end">
                    <h6 className="mb-2 text-success fw-bold">
                      ${item?.price?.toLocaleString()}
                    </h6>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteWishlistItem(item?._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ============ 
               Summary
            ============  */}
          <div className="col-lg-4">
            <div className="card border-0 p-3">
              <h4 className="text-center text-muted mb-4">Order Summary</h4>

              <ul className="list-unstyled small text-muted mb-4">
                {wishlist.map((item) => (
                  <li key={item?._id} className="mb-2">
                    • {item?.title}
                  </li>
                ))}
              </ul>

              <div className="d-flex justify-content-between mb-2">
                <span className="fw-medium">Selected Items</span>
                <span>{wishlist?.length}</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-medium">Subtotal</span>
                <span className="text-success fw-bold">
                  ${subtotal?.toLocaleString()}
                </span>
              </div>

              <button
                className="btn btn-success w-100 rounded-pill py-2 fw-semibold"
                onClick={checkoutHandler}
              >
                Continue to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyWishlist;
