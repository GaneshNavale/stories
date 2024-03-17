import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import logo from "../logo.svg";

const NewPostNav = () => {

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
                <Nav.Link as={NavLink} to="/" className="navLink">
                  Home
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NewPostNav;
