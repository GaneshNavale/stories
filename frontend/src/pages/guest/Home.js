import axios from "axios";
import { useEffect, useState } from "react";
import { Parser, Paragraph, Header } from "@alkhipce/editorjs-react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Blogs from "./Blogs";
import SidePanel from "../../components/SidePanel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.scss";

const Home = () => {
  const [state, setState] = useState({ posts: [], isLoading: true });
  useEffect(() => {
    getPosts().then((response) => {
      setState({ posts: response.data.posts, isLoading: false });
    });
  }, []);

  const getPosts = async () => {
    const response = axios.get(`http://localhost:3000/api/v1/posts`);
    return response;
  };

  return (
    <>
      <NavBar />
      <Banner />
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
                <div className="sticky-sm-top">
                  <SidePanel />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
