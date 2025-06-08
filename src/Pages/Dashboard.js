import React from "react";
import "../styles/dashboard.css";
import Sidebar from "../Components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-content">
        <Outlet />
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
