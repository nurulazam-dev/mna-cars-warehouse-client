import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../config";

export const addToWishlist = async (wishlistItem, token) => {
  try {
    const res = await fetch(`${LOCAL_BASE_URL}/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(wishlistItem),
    });

    if (!res.ok) throw new Error("Failed to add to wishlist");

    toast.success("Item added to wishlist");
  } catch (err) {
    toast.error(err.message);
  }
};
