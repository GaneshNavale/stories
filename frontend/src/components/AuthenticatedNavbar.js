import React, { useState } from "react";
// import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import logo from "../logo.svg";

const AuthenticatedNavbar = ({ signup, handleSignUpData }) => {
  const [navbar, setNavbar] = useState(false);
  const [signIn, setSignIn] = useState();

  const changeBackground = () => {
    if (window.scrollY >= 480) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const handleSignOut = () =>{
    setSignIn(null);
    handleSignUpData(signIn)
  }

  return (
    <>
      <Navbar bg="light" expand="md" className="nav" fixed="top">
        <Container className="navbarContainer">
          <Navbar.Brand as={NavLink} to="/">
            <Row className="align-items-center">
              <Col xs={6} md={3}>
                <img alt="" src={logo} width="100" height="50" />
              </Col>
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="ml-auto">
            <div className="part2">
              <div className="linksBox">
                <Nav.Link as={NavLink} to="/newPost" className="navLink">
                  Write
                </Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle variant="link" id="dropdown-basic" className="custom-dropdown-toggle">
                    {(signup.status.data.first_name && signup.status.data.first_name.toUpperCase())}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="custom-dropdown-menu">
                    <Dropdown.Item as={NavLink} to="/profile">
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/settings">
                      Stories
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/settings">
                      Settings
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/profile">
                      Saved
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} onClick={handleSignOut} className="sign-out-button">
                      Sign Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AuthenticatedNavbar;
