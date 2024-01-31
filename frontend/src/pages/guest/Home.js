import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";
import Banner from "./Banner";
import Blogs from "./Blogs";
import SidePanel from "../../components/SidePanel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.scss";

const Home = () => {
  const [state, setState] = useState({ posts: [], isLoading: true });
  const [signup, setSignUp] = useState();

  useEffect(() => {
    getPosts().then((response) => {
      setState({ posts: response.data.posts, isLoading: false });
    });
  }, []);

  const getPosts = async () => {
    const response = await axios.get(`http://localhost:3000/api/v1/posts`);
    return response;
  };

  const handleSignUpData = (data) => {
    setSignUp(data);
    console.log("SignUpDetail Home", data);
    console.log("SignUpDetail signup", signup);
  };

  return (
    <>
      {signup && signup.status && signup.status.code === 200 ? (
        <>
          {console.log("SignUpDetail Home in component", signup.status.data.first_name)}
          <AuthenticatedNavbar signup={ signup } handleSignUpData={ handleSignUpData } />
          <div className="AuthenticatedNavbar-container"></div>
          <Container>
            <Row>
              <Col md={8}>
                <div className="display-container">
                  <div className="part-first">
                    <Blogs signup={signup}/>  {/** i send signup because want to display <AuthenticatedNavbar />  in DisplayPost*/}
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
      ) : (
        <>
          {console.log("Display another part of the ternary condition")}
          <NavBar handleSignUpData={handleSignUpData} />
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
      )}
    </>
  );
};

export default Home;
