import { Outlet, useLocation } from "react-router-dom";
import "../styles/Dashboard.css";
import Sidebar from "../Components/Dashboard/Sidebar";
import { useAuth } from "../hooks/useAuth";
import Profile from "../Components/Dashboard/Profile";
import Overview from "../Components/Dashboard/Admin/Overview";

const Dashboard = () => {
  const { role } = useAuth();
  const location = useLocation();

  const isDashboardRoot = location.pathname === "/dashboard";

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="outlet-area">
        {isDashboardRoot ? (
          role === "admin" ? (
            <Overview />
          ) : (
            <Profile />
          )
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
