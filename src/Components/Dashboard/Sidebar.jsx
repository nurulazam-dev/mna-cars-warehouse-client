import React from "react";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../../styles/Dashboard.css";
import SidebarNavItem from "./SidebarNavItem";
import { useAuth } from "../../hooks/useAuth.js";

const Sidebar = () => {
  const { user, isAdmin } = useAuth();
  const location = useLocation();

  return (
    <div className="sidebar">
      <h4 className="text-center mb-3 dashboard-title">Dashboard</h4>
      <Nav className="flex-column" variant="pills">
        {!isAdmin && (
          <>
            <SidebarNavItem
              to="/dashboard/my-wishlists"
              icon="bi-heart"
              label="My Wishlists"
              active={location.pathname.includes("/dashboard/my-wishlists")}
            />
            <SidebarNavItem
              to="/dashboard/my-orders"
              icon="bi-box-seam"
              label="My Orders"
              active={location.pathname.includes("/dashboard/my-orders")}
            />
          </>
        )}

        {isAdmin && (
          <>
            <SidebarNavItem
              to="/dashboard/admin"
              icon="bi-speedometer2"
              label="Overview"
              active={location.pathname === "/dashboard/admin"}
            />
            <SidebarNavItem
              to="/dashboard/admin/add-item"
              icon="bi-plus-circle"
              label="Add Item"
              active={location.pathname.includes("/dashboard/admin/add-item")}
            />
            <SidebarNavItem
              to="/dashboard/admin/manage-items"
              icon="bi-box"
              label="Manage Items"
              active={location.pathname.includes(
                "/dashboard/admin/manage-items"
              )}
            />
            <SidebarNavItem
              to="/dashboard/admin/manage-orders"
              icon="bi-receipt"
              label="Manage Orders"
              active={location.pathname.includes(
                "/dashboard/admin/manage-orders"
              )}
            />
            <SidebarNavItem
              to="/dashboard/admin/manage-users"
              icon="bi-people"
              label="Manage Users"
              active={location.pathname.includes(
                "/dashboard/admin/manage-users"
              )}
            />
          </>
        )}

        {user && (
          <>
            <SidebarNavItem
              to="/dashboard/profile"
              icon="bi-people"
              label="Profile"
              active={location.pathname.includes("/dashboard/profile")}
            />
            <SidebarNavItem
              to="/dashboard/settings"
              icon="bi-gear"
              label="Settings"
              active={location.pathname.includes("/dashboard/settings")}
            />

            <div className="logged-in-user">
              <small>Logged in as:</small>
              <div>{user?.email}</div>
            </div>
          </>
        )}
      </Nav>
    </div>
  );
};

export default Sidebar;
