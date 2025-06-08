import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
      <h3 className="text-center mb-4" style={{ color: "#0d6efd" }}>
        Dashboard
      </h3>
      <Nav className="flex-column" variant="pills">
        <Nav.Link
          as={Link}
          to="/dashboard/update"
          className="text-white mb-2"
          activeClassName="active"
        >
          <i className="bi bi-speedometer2 me-2"></i> Update Item
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/dashboard/ManageInventories"
          className="text-white mb-2"
          activeClassName="active"
        >
          <i className="bi bi-person me-2"></i> Manage Items
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/dashboard/add"
          className="text-white mb-2"
          activeClassName="active"
        >
          <i className="bi bi-gear me-2"></i> Add Item
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/dashboard/myItems"
          className="text-white mb-2"
          activeClassName="active"
        >
          <i className="bi bi-bar-chart me-2"></i> My Items
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/logout"
          className="text-white mt-4"
          activeClassName="active"
        >
          <i className="bi bi-box-arrow-right me-2"></i> Logout
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
