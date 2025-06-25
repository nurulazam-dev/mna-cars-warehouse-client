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

  const addToWishlistItem = async (wishlistItem, token) => {
    try {
      const response = await fetch(`${LOCAL_BASE_URL}/wishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(wishlistItem),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add item to wishlist.");
      }
      toast.success("Successfully added Item");
      return data;
    } catch (err) {
      toast.error(err.message);
      throw err;
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

  const clearWishlist = async () => {
    try {
      await fetch(`${LOCAL_BASE_URL}/wishlist/clear/${email}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setWishlist([]);
    } catch (err) {
      console.error("Failed to clear wishlist:", err);
    }
  };

  useEffect(() => {
    if (email && token) {
      fetchWishlist();
    }
  }, [email, token]);

  return {
    wishlist,
    loading,
    addToWishlistItem,
    deleteWishlistItem,
    clearWishlist,
    refresh: fetchWishlist,
  };
};
