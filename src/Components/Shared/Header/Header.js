import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import "./Header.css";
import brandLogo from "../../../assets/images/icon/icon.png";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <Navbar
      className="shadow-sm"
      sticky="top"
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ minHeight: "70px" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={brandLogo}
            alt="Logo"
            style={{ height: "50px", width: "60px", marginRight: "10px" }}
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
            <Nav.Link as={Link} to="/dashboard" className="fs-5 mx-2">
              Dashboard
            </Nav.Link>
            <NavDropdown
              title="About"
              id="collasible-nav-dropdown"
              className="fs-5 mx-2"
            >
              <NavDropdown.Item as={Link} to="/about">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/developer">
                Developer
              </NavDropdown.Item>
            </NavDropdown>
            {user ? (
              <NavDropdown
                title={<span>{user.displayName || "User"}</span>}
                id="user-nav-dropdown"
                align="end"
                className="mx-2"
              >
                <NavDropdown.Item disabled>{user.email}</NavDropdown.Item>
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
