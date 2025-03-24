import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            sticky="top"
        >
            <Navbar.Brand
                as={NavLink}
                to='/'
            >
                QuickMart
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse id="main-navbar-nav">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={NavLink} to='/products'>
                        Products
                    </Nav.Link>
                    <Nav.Link as={NavLink} to='/login'>
                        Login
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
/*
                    <Nav.Link as={NavLink} to='/'>
                        
                    </Nav.Link>
*/