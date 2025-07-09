import React from "react";
import Chart from "../Chart";
import DashboardStats from "./DashboardStats";
import OrdersSummary from "./DashboardHome/OrdersSummary";
import InfoContainer from "./DashboardHome/InfoContainer";
import DistributionPieChart from "./DashboardHome/DistributionPieChart";
import { useAuth } from "../../../hooks/useAuth";
import { formatDate } from "../../../utils/formatDate";

const Overview = () => {
  const { user } = useAuth();

  return (
    <div className="container">
      <div
        className="card border-0 shadow-sm rounded-4 p-4 mb-4 position-relative overflow-hidden"
        style={{
          minHeight: "180px",
          backgroundImage:
            "linear-gradient(135deg,rgb(205, 225, 250), #ffffff)",
        }}
      >
        <div className="row g-4 align-items-center">
          {/* Admin Info */}
          <div className="col">
            <h2 className="fw-bold text-primary mb-1">
              Welcome back, {user?.name || "Admin"} 👋
            </h2>
            <p className="mb-2 text-muted">
              You're logged in as{" "}
              <span className="badge bg-success">{user?.role || "admin"}</span>
            </p>

            <div className="row">
              <div className="col-md-4">
                <small className="text-muted">📧 Email:</small>
                <div className="fw-semibold">
                  {user?.email || "admin@example.com"}
                </div>
              </div>
              <div className="col-md-4">
                <small className="text-muted">📅 Joined On:</small>
                <div className="fw-semibold">
                  {formatDate(user.createdAt) || "N/A"}
                </div>
              </div>
              <div className="col-md-4">
                <small className="text-muted">🛡️ Role:</small>
                <div className="fw-semibold text-capitalize">
                  {user?.role || "admin"}
                </div>
              </div>
            </div>
          </div>
          {/* Admin Avatar */}
          <div className="col-auto">
            <div
              className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
              style={{
                width: 120,
                height: 120,
                fontSize: 32,
                fontWeight: "bold",
              }}
            >
              {user?.name?.charAt(0)?.toUpperCase() || "A"}
            </div>
          </div>
        </div>

        {/* Decorative background bubble */}
        <div className="position-absolute top-0 end-50 opacity-25">
          <i className="bi bi-speedometer2 text-primary display-1"></i>
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
