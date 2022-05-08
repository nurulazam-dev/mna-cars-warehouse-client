import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar className='shadow-sm' sticky='top' collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Brand className='' as={Link} to='/'>
                            <img style={{ height: "50px", width: '70px' }} src="icon.png" alt="" />
                            <span className='mx-2 brand-title'>MNA Cars Warehouse</span>
                        </Navbar.Brand>
                    </Nav>

                    <Nav>
                        <Nav.Link as={Link} to="/" className='text-white fs-5'>Home</Nav.Link>
                        <Nav.Link as={Link} to="blogs" className='text-white fs-5'>Blogs</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to="manage" className='text-white fs-5'>Manage</Nav.Link>
                                <Nav.Link as={Link} to="add" className='text-white fs-5'>Add Item</Nav.Link>
                                <Nav.Link as={Link} to="myitems" className='text-white fs-5'>My Items</Nav.Link>
                            </>
                        }

                        <NavDropdown title="About" className='text-white fs-5' id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Nav.Link as={Link} to="about" className='text-primary fs-5'>About Us</Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                            <Nav.Link as={Link} to="developer" className='text-primary fs-5'>Developer</Nav.Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                        {
                            user ? <button className='btn btn-link text-white text-decoration-none fs-5' onClick={handleSignOut}>Sign out</button> : (<Nav.Link as={Link} to="login" className='text-white fs-5'>Login</Nav.Link>)
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;