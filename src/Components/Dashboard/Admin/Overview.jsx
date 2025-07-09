import React from "react";
import Chart from "../Chart";
import DashboardStats from "./DashboardHome/DashboardStats/DashboardStats";
import OrdersSummary from "./DashboardHome/OrdersSummary";
import WeeklyOrdersChart from "./DashboardHome/WeeklyOrdersChart";
import DistributionPieChart from "./DashboardHome/DistributionPieChart";
import WelcomeBanner from "./DashboardHome/WelcomeBanner";

const Overview = () => {
  return (
    <div className="container">
      <WelcomeBanner />
      <DashboardStats />
      <OrdersSummary />
      <WeeklyOrdersChart />
      <DistributionPieChart />
      <Chart />
    </div>
  );
};

export default Overview;
