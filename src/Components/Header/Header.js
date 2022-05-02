import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
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
                        {
                            user ? <button className='btn btn-link text-black text-decoration-none fs-5' onClick={handleSignOut}>Sign out</button> : (<Nav.Link as={Link} to="login" className='text-black fs-5'>Login</Nav.Link>)
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;