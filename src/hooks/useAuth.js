import { useState } from "react";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../config";

export const useAuth = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const token = localStorage.getItem("token");
  const isAdmin = user?.role === "admin";

  const login = async (data) => {
    try {
      const res = await fetch(`${LOCAL_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Invalid credentials");

      const result = await res.json();

      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      setUser(result.user);

      toast.success("Logged in successfully");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const register = async (data) => {
    try {
      const res = await fetch(`${LOCAL_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Registration failed");

      toast.success("Registration successful");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out");
  };

  return { user, token, isAdmin, login, register, logout };
};
