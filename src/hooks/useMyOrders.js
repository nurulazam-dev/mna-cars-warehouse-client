import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../config";

export const useMyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const fetchMyOrders = useCallback(async () => {
    try {
      setLoading(true);
      if (!user?.email) {
        throw new Error("User email not found");
      }
      const res = await fetch(`${LOCAL_BASE_URL}/orders/${user?.email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch orders");

      const data = await res.json();
      setOrders(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, [user?.email, token]);

  useEffect(() => {
    if (user?.email && token) {
      fetchMyOrders();
    }
  }, [user?.email, token]);

  return { orders, loading, refetch: fetchMyOrders };
};
