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
    </section>
  );
};

export default MyWishlist;
