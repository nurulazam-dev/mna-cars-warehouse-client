import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Offcanvas,
  Row,
  Col,
} from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { user, isAdmin } = useAuth();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      {/* Top Navbar */}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        className="shadow-sm"
      >
        <Container fluid>
          <Button
            variant="outline-light"
            onClick={handleShow}
            className="me-2 d-lg-none"
          >
            <i className="bi bi-list"></i>
          </Button>
          <Navbar.Brand as={Link} to="/">
            Dashboard
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid className="p-0">
        <Row className="g-0">
          {/* Sidebar */}
          <Col
            lg={2}
            className="d-none d-lg-block bg-dark text-white vh-100 p-3"
            style={{ position: "sticky", top: 0 }}
          >
            <SidebarNav user={user} isAdmin={isAdmin} />
          </Col>

          {/* Mobile Sidebar Offcanvas */}
          <Offcanvas show={showSidebar} onHide={handleClose} backdrop="true">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Dashboard Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <SidebarNav
                user={user}
                isAdmin={isAdmin}
                handleClose={handleClose}
              />
            </Offcanvas.Body>
          </Offcanvas>

          {/* Main Content */}
          <Col
            lg={10}
            className="p-3"
            style={{ background: "#f8f9fa", minHeight: "calc(100vh - 56px)" }}
          >
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;

// Extract Sidebar into separate component for cleaner code
const SidebarNav = ({ user, isAdmin, handleClose }) => (
  <Nav className="flex-column">
    {!isAdmin && (
      <>
        <Nav.Link
          as={Link}
          to="/dashboard/my-wishlists"
          onClick={handleClose}
          className="text-white py-2"
        >
          <i className="bi bi-heart me-2"></i> My Wishlists
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/dashboard/my-orders"
          onClick={handleClose}
          className="text-white py-2"
        >
          <i className="bi bi-box-seam me-2"></i> My Orders
        </Nav.Link>
      </>
    )}

    {isAdmin && (
      <>
        <Nav.Link
          as={Link}
          to="/dashboard/admin"
          onClick={handleClose}
          className="text-white py-2"
        >
          <i className="bi bi-speedometer2 me-2"></i> Overview
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/dashboard/admin/add-item"
          onClick={handleClose}
          className="text-white py-2"
        >
          <i className="bi bi-plus-circle me-2"></i> Add Item
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/dashboard/admin/manage-items"
          onClick={handleClose}
          className="text-white py-2"
        >
          <i className="bi bi-box-seam me-2"></i> Manage Items
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/dashboard/admin/manage-orders"
          onClick={handleClose}
          className="text-white py-2"
        >
          <i className="bi bi-receipt me-2"></i> Manage Orders
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/dashboard/admin/manage-users"
          onClick={handleClose}
          className="text-white py-2"
        >
          <i className="bi bi-people me-2"></i> Manage Users
        </Nav.Link>
      </>
    )}

    {user && (
      <>
        <Nav.Link
          as={Link}
          to="/dashboard/settings"
          onClick={handleClose}
          className="text-white py-2"
        >
          <i className="bi bi-gear me-2"></i> Settings
        </Nav.Link>
        <div className="small text-white px-2 py-3 border-top mt-3">
          Logged in as:
          <div>{user?.email}</div>
        </div>
      </>
    )}
  </Nav>
);
