import { Outlet } from "react-router-dom";
import "../styles/Dashboard.css";
import Sidebar from "../Components/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="outlet-area">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
