import React from "react";
import Banner from "./Banner";
import Blogs from "./Blogs";
import SidePanel from "../../components/SidePanel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAuth } from "../../hooks/useAuth";
import "./Home.scss";

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="Banner-container">{!user && <Banner />}</div>
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
