import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../config";

export const useAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchOrders = async () => {
    try {
      const res = await fetch(`${LOCAL_BASE_URL}/orders`, {
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
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return { orders, loading, refetch: fetchOrders };
};
