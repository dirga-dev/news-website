import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
        <Navbar className="navigation border-bottom" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/saved">Saved</Nav.Link>
                    </Nav>
                
            </Container>
        </Navbar>
    </div>
  )
}

export default Navigation;