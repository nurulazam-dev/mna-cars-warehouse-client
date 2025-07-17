import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../config";
import { useLocation, useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );

  const isAdmin = user?.role === "admin";
  const isUser = user?.role === "user";
  const role = isAdmin ? "admin" : isUser ? "user" : null;

  const refetchUser = async () => {
    try {
      const res = await fetch(`${BASE_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch user");

      const updatedUser = await res.json();
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.error("refetchUser error:", error);
    }
  };

  const login = async (data) => {
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        return result;
      }

      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      setUser(result.user);
      setToken(result.token);

      const from = location.state?.from?.pathname || "/dashboard";
      navigate(from, { replace: true });

      return { success: true, user: result.user };
    } catch (err) {
      return { success: false, message: err.message || "Login failed" };
    }
  };

  const register = async (data) => {
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Registration failed");
      navigate("/login", { replace: true });
      toast.success("Registration successful");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    navigate("/login", { replace: true });
    toast.success("Logged out");
  };

  return { user, role, token, isAdmin, login, register, refetchUser, logout };
};
