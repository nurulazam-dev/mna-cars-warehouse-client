import React from "react";
import Sidebar from "../Components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div className="flex-grow-1 p-3" style={{ background: "#f5f5f5" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
