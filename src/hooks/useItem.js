import { useState, useEffect } from "react";
import { LOCAL_BASE_URL } from "../config";

export const useItem = (id) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchItem = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${LOCAL_BASE_URL}/items/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setItem(data);
    } catch (err) {
      console.error("Error fetching item:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchItem();
  }, [id]);

  return { item, loading, refetch: fetchItem };
};
