import React from "react";
import Chart from "../Chart";
import DashboardStats from "./DashboardHome/DashboardStats/DashboardStats";
import OrdersSummary from "./DashboardHome/OrdersSummary";
import MonthlyOrdersChart from "./DashboardHome/MonthlyOrdersChart";
import DistributionPieChart from "./DashboardHome/DistributionPieChart";
import WelcomeBanner from "./DashboardHome/WelcomeBanner";

const Overview = () => {
  return (
    <div className="container">
      <WelcomeBanner />
      <DashboardStats />
      <OrdersSummary />
      <MonthlyOrdersChart />
      <DistributionPieChart />
      <Chart />
    </div>
  );
};

export default Overview;
