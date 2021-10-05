import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userLogoutAction } from "../../pages/admin-user/userAction";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar collapseOnSelect variant="dark" bg="primary" expand="lg">
        <Container>
          <Link to="dashboard">
            <Navbar.Brand>E-shop Admin</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/admin-profile">
                <i class="fas fa-user-tie"></i>
              </Nav.Link>
              <Nav.Link
                href="#"
                onClick={() => {
                  dispatch(userLogoutAction());
                }}
              >
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
