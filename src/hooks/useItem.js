import { useState, useEffect, useCallback } from "react";
import { BASE_URL } from "../config";

export const useItem = (id) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchItem = useCallback(async () => {
    if (!id) return;

    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/items/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch item");

      const data = await res.json();
      setItem(data);
    } catch (err) {
      console.error("Error fetching item:", err.message);
    } finally {
      setLoading(false);
    }
  }, [id, token]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  return { item, loading, refetch: fetchItem };
};
