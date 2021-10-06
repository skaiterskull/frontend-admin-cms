import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { userLogoutAction } from "../../pages/admin-user/userAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

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
              {/* <Link className="nav-link" to="/admin-profile">
                <i clasName="fas fa-user-tie"></i>
              </Link> */}
              <LinkContainer to="/admin-profile">
                <Nav.Link>
                  <i class="fas fa-user"></i>
                </Nav.Link>
              </LinkContainer>
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
