import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/Dashboard.css";

const SidebarNavItem = ({ to, icon, label, active }) => {
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

export default SidebarNavItem;
