import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import logo from "./../../logo.svg";
import SignIn from "../../components/SignIn";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 580) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <Navbar
        bg="light"
        expand="md"
        className={`navbar ${navbar ? "white" : "yellow"}`}
        fixed="top"
      >
        <Container className="navbarContainer">
          <Navbar.Brand as={NavLink} to="/">
            <img alt="" src={logo} width="100" height="50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="ml-auto">
            <div className="part2">
              <div className="linksBox">
                <Nav.Link as={NavLink} to="/newPost" className="navLink">
                  Write
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  className="navLink"
                  onClick={() => setShowSignInModal(true)}
                >
                  Sign in
                </Nav.Link>
                <Button
                  onClick={() => {
                    setShowSignInModal();
                  }}
                  style={{
                    background: navbar ? "#3dac66" : "black",
                    color: "white",
                    borderRadius: "20px",
                    borderColor: navbar ? "#3dac66" : "black",
                    fontSize: "15px",
                    fontWeight: "400",
                    letterSpacing: ".5px",
                    marginLeft: "15px",
                  }}
                >
                  Get started
                </Button>
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <SignIn show={showSignInModal} onHide={() => setShowSignInModal(false)} />
    </>
  );
};

export default NavBar;
