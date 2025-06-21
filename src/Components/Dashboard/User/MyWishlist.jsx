import { useWishlist } from "../../../hooks/useWishlist";
import { useAuth } from "../../../hooks/useAuth";
import Loader from "../../Shared/Loader/Loader";

const MyWishlist = () => {
  const { user, token } = useAuth();
  const { wishlist, loading, deleteWishlistItem } = useWishlist(
    user?.email,
    token
  );

  return (
    <section className="container">
      <h2 className="text-center mb-2 text-primary fw-bold">My Wishlist</h2>

      {loading && <Loader />}

      {!loading && (
        <div>
          {wishlist?.length === 0 ? (
            <p className="text-center text-danger">No items in wishlist.</p>
          ) : (
            <div className="row">
              {wishlist?.map((item) => (
                <div className="col-md-4 mb-3" key={item?._id}>
                  <div className="card">
                    <div className="card-body">
                      <img
                        src={item?.img}
                        alt={item?.title}
                        style={{
                          height: 60,
                        }}
                      />
                      <h5>{item?.title}</h5>
                      <p>{item?._id}</p>
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
          )}
        </div>
      )}

      <div className="border row">
        <div className="col-md-8 border shadow">
          <h4 className="fs-6 text-primary">
            My wishlist Items: ({wishlist ? wishlist?.length : 0})
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
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-4 border shadow">continue to checkout</div>
      </div>
    </section>
  );
};

export default MyWishlist;
