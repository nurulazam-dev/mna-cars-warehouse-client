import { useWishlist } from "../../../hooks/useWishlist";
import { useAuth } from "../../../hooks/useAuth";
import Loader from "../../Shared/Loader/Loader";

const MyWishlist = () => {
  const { user, token } = useAuth();
  const { wishlist, loading, deleteWishlistItem } = useWishlist(
    user?.email,
    token
  );

  const subtotal = wishlist?.reduce((acc, p) => {
    return p ? acc + p?.price : acc;
  }, 0);

  return (
    <section className="container">
      <h2 className="text-center mb-2 text-primary fw-bold">My Wishlist</h2>

      {loading && <Loader />}

      {!loading && (
        <div>
          {wishlist?.length === 0 ? (
            <p className="text-center text-danger">No items in wishlist.</p>
          ) : (
            <div className="card p-4">
              <div className="row">
                <div className="col-md-8 border-end">
                  <h4 className="fs-6 pb-2" style={{ color: "GrayText" }}>
                    My wishlist Items:{" "}
                    <span className="text-primary">
                      ({wishlist ? wishlist?.length : 0})
                    </span>
                  </h4>
                  {wishlist?.map((item) => (
                    <div className="card mb-3 m-2" key={item?._id}>
                      <div className="row p-3">
                        <div className="col-md-2">
                          <img
                            src={item?.img}
                            alt={item?.title}
                            className="rounded"
                            style={{
                              height: 60,
                            }}
                          />
                        </div>
                        <div className="col-md-8">
                          <h5 className="fs-6 mb-0">{item?.title}</h5>
                          <span style={{ fontSize: 14, color: "GrayText" }}>
                            Brand : {item?.brand}
                          </span>
                          <p
                            style={{ fontSize: 13, color: "GrayText" }}
                            className="m-0"
                          >
                            Supplier : {item?.supplierEmail}
                          </p>
                        </div>
                        <div className="col-md-2">
                          <h6 className="fs-6">$ {item?.price} </h6>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteWishlistItem(item?._id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-md-4 px-4">
                  <h2
                    className="fs-4 text-center border rounded px-2 py-2 mb-4"
                    style={{
                      color: "GrayText",
                    }}
                  >
                    Continue To Checkout
                  </h2>
                  {wishlist?.map((item) => (
                    <li
                      key={item?._id}
                      style={{
                        color: "GrayText",
                        fontSize: 15,
                        marginBottom: 5,
                      }}
                    >
                      {item?.title}
                    </li>
                  ))}

                  <div className="d-flex justify-content-between mt-3">
                    <h2 className="fs-6">Selected items : </h2>
                    <h3 className="fs-6">{wishlist?.length}</h3>
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <h2 className="fs-5">Subtotal : </h2>
                    <h3 className="fs-5">$ {subtotal?.toLocaleString()}</h3>
                  </div>
                  <button className="btn btn-success btn-md px-4 py-2">
                    Continue to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default MyWishlist;
