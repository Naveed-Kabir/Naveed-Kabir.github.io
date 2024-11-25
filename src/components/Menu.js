import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">WanderSync</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/introduction">Introduction</Nav.Link>
            <Nav.Link as={Link} to="/ui">UI Design</Nav.Link>
            <Nav.Link as={Link} to="/uml">UML Diagrams</Nav.Link>
            <Nav.Link as={Link} to="/functionality">Functionality</Nav.Link>
            <Nav.Link as={Link} to="/conclusion">Conclusion</Nav.Link>
            <Nav.Link as={Link} to="/contributors">Contributors</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
