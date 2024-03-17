import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import logo from "./../../logo.svg";
import SignIn from "../AuthenticationComponents/SignIn";
import { useAuth } from "../../hooks/useAuth";
import CreateNewUser from "../AuthenticationComponents/CreateNewUser";

const NavBar = (props) => {
  const { user } = props;
  const [navbar, setNavbar] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showGetStartInModal, setshowGetStartInModal] = useState(false);
  const { logout } = useAuth;

  const changeBackground = () => {
    if (window.scrollY >= 480) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const handleLogOut = () => {
    // logout(); // useAuth not working ........
    localStorage.removeItem("user");
    window.location.reload(false); // use to reload a page ....
  };

  return (
    <>
      <Navbar
        bg="light"
        expand="md"
        className={`navbar ${navbar || user ? "white" : "yellow"}`}
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
                {user && (
                  <>
                    <Nav.Link as={NavLink} to="/newPost" className="navLink">
                      Write
                    </Nav.Link>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="link"
                        id="dropdown-basic"
                        className="custom-dropdown-toggle"
                      >
                        {user.first_name}
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
                        <Dropdown.Item as={NavLink} onClick={handleLogOut}>
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                )}
                {!user && (
                  <>
                    <Nav.Link
                      as={NavLink}
                      className="navLink"
                      onClick={() => setShowSignInModal(true)}
                    >
                      Sign in
                    </Nav.Link>

                    <Button
                      onClick={() => setshowGetStartInModal(true)}
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
                  </>
                )}
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <SignIn show={showSignInModal} onHide={() => setShowSignInModal(false)} />
      <CreateNewUser
        show={showGetStartInModal}
        onHide={() => setshowGetStartInModal(false)}
      />
    </>
  );
};

export default NavBar;
