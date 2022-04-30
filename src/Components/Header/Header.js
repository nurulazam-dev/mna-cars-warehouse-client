import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='shadow-sm' sticky='top' collapseOnSelect expand="lg" bg="white" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                        <Navbar.Brand className='' as={Link} to='/'>
                            <img style={{ height: "70px", width: '50px' }} src="icon.png" alt="" />
                            <span className='mx-2 brand-title'>MNA Cars Warehouse</span>
                        </Navbar.Brand>
                        
                    </Nav>
                    
                    <Nav>
                        <Nav.Link as={Link} to="/" className='text-black fs-5'>Home</Nav.Link>
                        <Nav.Link as={Link} to="blogs" className='text-black fs-5'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to="about" className='text-black fs-5'>About</Nav.Link>

                        <Nav.Link as={Link} to="register" className='text-black fs-5'>Register</Nav.Link>
                        <Nav.Link as={Link} to="login" className='text-black fs-5'>Login</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;