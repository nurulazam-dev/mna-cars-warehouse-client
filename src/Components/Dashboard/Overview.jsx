import React from "react";
import Chart from "./Chart";
import DashboardStats from "./Admin/DashboardStats";

const Overview = () => {
  return (
    <div className="container">
      <h2 className="text-center mb-2 text-primary fw-bold">
        Welcome To Dashboard
      </h2>
      <DashboardStats />
      <Chart />
    </div>
  );
};

export default Overview;
