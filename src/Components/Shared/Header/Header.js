import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import brandLogo from "../../../assets/images/icon/mna-car-warehouse.png";
import { useAuth } from "../../../hooks/useAuth";

const Header = () => {
  const { user, token, logout } = useAuth();

  const handleSignOut = () => {
    logout();
  };

  const isAuthenticated = user && token;

  return (
    <Navbar
      className="shadow-sm"
      sticky="top"
      expand="lg"
      style={{
        minHeight: "70px",
        background: "linear-gradient(90deg, #2c5364 0%,  #0f2027 100%)",
      }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={brandLogo}
            alt="Logo"
            style={{ width: "120px", marginRight: "10px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="fs-5 mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" className="fs-5 mx-2">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/items" className="fs-5 mx-2">
              Items
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="fs-5 mx-2">
              Dashboard
            </Nav.Link>

            <NavDropdown
              title="About"
              id="collasible-nav-dropdown"
              className="fs-5 mx-2"
            >
              <NavDropdown.Item as={Link} to="/about-us">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/about-developer">
                Developer
              </NavDropdown.Item>
            </NavDropdown>
            {isAuthenticated ? (
              <NavDropdown
                title={<span>{user?.name || "User"}</span>}
                id="user-nav-dropdown"
                align="end"
                className="mx-2"
              >
                <NavDropdown.Item disabled>{user?.email}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleSignOut}>
                  Sign out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login" className="fs-5 mx-2">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
