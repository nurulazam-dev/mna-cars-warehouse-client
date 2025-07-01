/* import React, { useEffect, useState } from "react";
import { LOCAL_BASE_URL } from "../../../config";
import { useAuth } from "../../../hooks/useAuth"; */
import InfoContainer from "./DashboardHome/InfoContainer";
import DistributionPieChart from "./DashboardHome/DistributionPieChart";
import { stats } from "../../../assets/data/statsData";

const DashboardStats = () => {
  /*   const { token } = useAuth();
  const [stats, setStats] = useState({ users: 0, items: 0, orders: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch(`${LOCAL_BASE_URL}/admin/stats`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setStats(data);
    };
    fetchStats();
  }, [token]); */

  return (
    <div>
      <h3 className="text-center mb-2 text-primary fw-bold">
        Dashboard Statistics
      </h3>
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Total Users</div>
            <div className="card-body pb-0">
              <h4>{stats[0]?.users}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card text-white mb-3"
            style={{ backgroundColor: "#6c757d" }}
          >
            <div className="card-header">Total Admins</div>
            <div className="card-body pb-0">
              <h4>{stats[0]?.users}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Total Items</div>
            <div className="card-body pb-0">
              <h4>{stats[0]?.items}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-header">Total QTYs</div>
            <div className="card-body pb-0">
              <h4>{stats[0]?.orders}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-3">
          <div
            className="card text-white mb-3"
            style={{ backgroundColor: "indigo" }}
          >
            <div className="card-header">Total Orders</div>
            <div className="card-body pb-0">
              <h4>{stats[0]?.orders || 0}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Pending Orders</div>
            <div className="card-body pb-0">
              <h4>{stats[0]?.pendingOrders || 0}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-info mb-3">
            <div className="card-header">Delivered Orders</div>
            <div className="card-body pb-0">
              <h4>{stats[0]?.deliveredOrders || 0}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-dark mb-3">
            <div className="card-header">Total Revenue</div>
            <div className="card-body pb-0">
              <h4>${stats[0]?.revenue?.toFixed(2) || 0}</h4>
            </div>
          </div>
        </div>
      </div>
      <InfoContainer />
      <DistributionPieChart />
    </div>
  );
};

export default DashboardStats;
