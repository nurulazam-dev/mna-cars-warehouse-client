import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Sidebar = () => {
  const { user, isAdmin } = useAuth();

  return (
    <div
      style={{
        height: "100vh",
        width: "220px",
        background: "#212529",
        color: "#fff",
        position: "fixed",
        top: 0,
        left: 0,
        paddingTop: "30px",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3 className="text-center mt-5 mb-4" style={{ color: "#0d6efd" }}>
        Dashboard
      </h3>
      <Nav className="d-flex flex-column" variant="pills">
        {/* =================
          User Only Routes
        ================= */}
        {!isAdmin && (
          <>
            <Nav.Link
              as={Link}
              to="/dashboard/my-wishlists"
              className="text-white mb-2"
              activeClassName="active"
            >
              <i className="bi bi-bar-chart me-2"></i> My wishlists
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/my-orders"
              className="text-white mb-2"
              activeClassName="active"
            >
              <i className="bi bi-bar-chart me-2"></i> My Items
            </Nav.Link>
          </>
        )}

        {/* =================
          User Only Routes
        ================= */}
        {isAdmin && (
          <>
            <Nav.Link
              as={Link}
              to="/dashboard/admin"
              className="text-white mb-2"
              activeClassName="active"
            >
              <i className="bi bi-speedometer2 me-2"></i> Overview
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/admin/add-item"
              className="text-white mb-2"
              activeClassName="active"
            >
              <i className="bi bi-gear me-2"></i> Add Item
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/dashboard/admin/manage-items"
              className="text-white mb-2"
              activeClassName="active"
            >
              <i className="bi bi-person me-2"></i> Manage Items
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/admin/manage-orders"
              className="text-white mb-2"
              activeClassName="active"
            >
              <i className="bi bi-person me-2"></i> Manage Orders
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/admin/manage-users"
              className="text-white mb-2"
              activeClassName="active"
            >
              <i className="bi bi-person me-2"></i> Manage Users
            </Nav.Link>
          </>
        )}
        {user && (
          <>
            <Nav.Link
              as={Link}
              to="/dashboard/settings"
              className="text-white mb-2"
              activeClassName="active"
            >
              <i className="bi bi-speedometer2 me-2"></i> Settings
            </Nav.Link>
            <div className="mt-5 px-4">
              <small>Logged in as:</small>
              <p>{user?.email}</p>
            </div>
          </>
        )}
      </Nav>
    </div>
  );
};

export default Sidebar;
