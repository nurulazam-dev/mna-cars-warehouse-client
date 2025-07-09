import React from "react";
import Chart from "./Chart";
import DashboardStats from "./Admin/DashboardStats";
import OrdersSummary from "./Admin/DashboardHome/OrdersSummary";
import InfoContainer from "./Admin/DashboardHome/InfoContainer";
import DistributionPieChart from "./Admin/DashboardHome/DistributionPieChart";
import { useAuth } from "../../hooks/useAuth";
import { formatDate } from "../../utils/formatDate";

const Overview = () => {
  const { user } = useAuth();

  return (
    <div className="container">
      {/* Dashboard Header with Welcome Banner */}
      {/* <div
        className="my-4 p-4 rounded shadow-sm bg-gradient"
        style={{
          background: "linear-gradient(90deg, #2c5364 0%, #0f2027 100%)",
          color: "black",
        }}
      >
        <h2 className="mb-1 fw-bold">
          Welcome to Dashboard
          {user?.name ? `, ${user.name}` : ""}
        </h2>
        <p className="mb-0 fs-5">
          {user?.role === "admin"
            ? "You have full administrative access."
            : "Here is your dashboard overview."}
        </p>
      </div> */}
      <div
        className="bg-white p-4 rounded-4 shadow-sm d-flex flex-wrap justify-content-between align-items-center mb-4"
        style={{
          minHeight: "180px",
          backgroundImage: "linear-gradient(135deg, #eef2f7, #ffffff)",
        }}
      >
        <div>
          <h2 className="fw-bold text-primary mb-2">
            👋 Welcome back, {user?.name || "Admin"}!
          </h2>
          <p className="mb-1 text-secondary">
            You are logged in as:{" "}
            <strong className="text-dark">{user?.role || "admin"}</strong>
          </p>
          <p className="mb-1 text-secondary">
            Email: <strong className="text-dark">{user?.email}</strong>
          </p>
          <p className="text-secondary">
            Registered on:{" "}
            <strong className="text-dark">
              {user?.createdAt ? formatDate(user.createdAt) : "N/A"}
            </strong>
          </p>
        </div>

        <div className="text-end">
          <img
            src={user?.img || "/images/welcome.png"}
            alt="Welcome"
            style={{ width: 140 }}
            className="img-fluid d-none d-md-block"
          />
        </div>
      </div>

      {/* <DashboardStats /> */}
      <DashboardStats />
      <OrdersSummary />
      <InfoContainer />
      <DistributionPieChart />
      <Chart />
    </div>
  );
};

export default Overview;
