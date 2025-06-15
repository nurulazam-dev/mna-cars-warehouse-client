import React, { useEffect, useState } from "react";
import { LOCAL_BASE_URL } from "../../../config";
import { useAuth } from "../../../hooks/useAuth";

const DashboardStats = () => {
  const { token } = useAuth();
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
  }, [token]);

  return (
    <div>
      <h3 className="text-center mb-2 text-primary fw-bold">
        Dashboard Statistics
      </h3>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Total Users</div>
            <div className="card-body">
              <h4>{stats?.users}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Total Items</div>
            <div className="card-body">
              <h4>{stats?.items}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3">
            <div className="card-header">Total Orders</div>
            <div className="card-body">
              <h4>{stats?.orders}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
