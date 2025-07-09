import React from "react";
import Chart from "../Chart";
import DashboardStats from "./DashboardStats";
import OrdersSummary from "./DashboardHome/OrdersSummary";
import InfoContainer from "./DashboardHome/InfoContainer";
import DistributionPieChart from "./DashboardHome/DistributionPieChart";
import WelcomeBanner from "./DashboardHome/WelcomeBanner";

const Overview = () => {
  return (
    <div className="container">
      <WelcomeBanner />
      <DashboardStats />
      <OrdersSummary />
      <InfoContainer />
      <DistributionPieChart />
      <Chart />
    </div>
  );
};

export default Overview;
