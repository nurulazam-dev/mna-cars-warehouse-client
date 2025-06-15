import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Nav } from "react-bootstrap";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const { user, isAdmin } = useAuth();
  const location = useLocation();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h4 className="text-center mb-3 dashboard-title">Dashboard</h4>
        <Nav className="flex-column" variant="pills">
          {!isAdmin && (
            <>
              <NavItem
                to="/dashboard/my-wishlists"
                icon="bi-heart"
                label="My Wishlists"
                active={location.pathname.includes("/dashboard/my-wishlists")}
              />
              <NavItem
                to="/dashboard/my-orders"
                icon="bi-box-seam"
                label="My Orders"
                active={location.pathname.includes("/dashboard/my-orders")}
              />
            </>
          )}
          {isAdmin && (
            <>
              <NavItem
                to="/dashboard/admin"
                icon="bi-speedometer2"
                label="Overview"
                active={location.pathname === "/dashboard/admin"}
              />
              <NavItem
                to="/dashboard/admin/add-item"
                icon="bi-plus-circle"
                label="Add Item"
                active={location.pathname.includes("/dashboard/admin/add-item")}
              />
              <NavItem
                to="/dashboard/admin/manage-items"
                icon="bi-box"
                label="Manage Items"
                active={location.pathname.includes(
                  "/dashboard/admin/manage-items"
                )}
              />
              <NavItem
                to="/dashboard/admin/manage-orders"
                icon="bi-receipt"
                label="Manage Orders"
                active={location.pathname.includes(
                  "/dashboard/admin/manage-orders"
                )}
              />
              <NavItem
                to="/dashboard/admin/manage-users"
                icon="bi-people"
                label="Manage Users"
                active={location.pathname.includes(
                  "/dashboard/admin/manage-users"
                )}
              />
            </>
          )}
          <NavItem
            to="/dashboard/settings"
            icon="bi-gear"
            label="Settings"
            active={location.pathname.includes("/dashboard/settings")}
          />
        </Nav>

        <div className="logged-in-user">
          <small>Logged in as:</small>
          <div>{user?.email}</div>
        </div>
      </div>

      {/* Outlet */}
      <div className="outlet-area">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

const NavItem = ({ to, icon, label, active }) => {
  return (
    <Nav.Link
      as={Link}
      to={to}
      className={`sidebar-item ${active ? "active" : ""}`}
    >
      <i className={`bi ${icon} nav-icon`}></i>
      <span className="nav-label">{label}</span>
    </Nav.Link>
  );
};
