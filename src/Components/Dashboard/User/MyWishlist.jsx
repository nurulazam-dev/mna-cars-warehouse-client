import React from "react";
import { useWishlist } from "../../../hooks/useWishlist";
import { useAuth } from "../../../hooks/useAuth";

const MyWishlist = () => {
  const { user, token } = useAuth();
  const { wishlist, loading, deleteWishlistItem } = useWishlist(
    user?.email,
    token
  );

  if (loading) return <p>Loading...</p>;

  if (!wishlist.length) return <p>No items in wishlist.</p>;

  return (
    <div className="container mt-5">
      <h3 className="mb-4">My Wishlist</h3>

      <div className="row">
        {wishlist?.map((item) => (
          <div className="col-md-4 mb-3" key={item?._id}>
            <div className="card">
              <div className="card-body">
                <h5>{item?.title}</h5>
                <p>{item?.description}</p>
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
    </div>
  );
};

export default MyWishlist;
