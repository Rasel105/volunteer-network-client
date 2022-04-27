import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../logos/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to='/'>
                            <img className='logo-img' src={logo} alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle className='bg-dark' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/home' className='text-dark fs-5 me-4'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/donation' className='text-dark fs-5 me-4'>Donation</Nav.Link>
                            <Nav.Link as={Link} to='/event' className='text-dark fs-5 me-4'>Event</Nav.Link>
                            <Nav.Link as={Link} to='/blog' className='text-dark fs-5 me-4'>Blog</Nav.Link>
                            <Link to='/login'>
                                <button className='btn btn-primary m-2 px-4 py-2 text-white'>Register</button>
                            </Link>
                            <Link to='/admin'>
                                <button className='btn btn-dark px-4 py-2 m-2 text-white'>Admin</button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;