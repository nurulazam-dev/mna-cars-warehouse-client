import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../config";

export const useAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to fetch orders");

      const data = await res.json();
      setOrders(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return { orders, loading, refetch: fetchOrders };
};
