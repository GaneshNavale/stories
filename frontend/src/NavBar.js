import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import logo from "./logo.svg";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md" className={styles.navbar} fixed="top">
      <Container className={styles.navbarContainer}>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} width="110" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/about" className={styles.navLink}>
            Sign in
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className={styles.navLink}>
            Sign Up
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
