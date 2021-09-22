import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect variant="dark" bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="/dashboard">E-shop Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
