import React, { useState } from "react";
import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";
import Banner from "./Banner";
import Blogs from "./Blogs";
import SidePanel from "../../components/SidePanel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.scss";

const Home = () => {
  const [signup, setSignUp] = useState();

  const handleSignUpData = (data) => {
    setSignUp(data);
  };

  // access local storage
  const userInfoString = localStorage.getItem("UserInfo");
  const userInfo = JSON.parse(userInfoString);
  console.log("userInfo", userInfoString);
  console.log("userInfo Name", userInfo?.name);

  return (
    <>
      {userInfo?.isPresent === true ? (
        <>
          <AuthenticatedNavbar userName={userInfo.name} />
          <div className="AuthenticatedNavbar-container"></div>
        </>
      ) : (
        <>
          {/* <NavBar handleSignUpData={handleSignUpData} />
          <div className="Banner-container">
            <Banner />
          </div> */}
        </>
      )}
      <div className="Banner-container">
        <Banner />
      </div>
      <Container>
        <Row>
          <Col md={8}>
            <div className="display-container">
              <div className="part-first">
                <Blogs />
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="display-container">
              <div className="vertical-line"></div>
              <div className="part-two">
                <SidePanel />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
