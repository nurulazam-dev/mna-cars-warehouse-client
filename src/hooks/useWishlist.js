import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../config";

export const useWishlist = (email, token) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWishlist = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${LOCAL_BASE_URL}/wishlist/${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to fetch wishlist");
      const data = await res.json();
      setWishlist(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteWishlistItem = async (id) => {
    try {
      const res = await fetch(`${LOCAL_BASE_URL}/wishlist/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to delete item");

      toast.success("Item removed from wishlist");
      fetchWishlist();
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (email && token) {
      fetchWishlist();
    }
  }, [email, token]);

  return { wishlist, loading, deleteWishlistItem, refresh: fetchWishlist };
};
