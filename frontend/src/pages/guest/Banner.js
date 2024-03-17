import { Col, Container, Row } from "react-bootstrap";
import "./Banner.scss";
import RandomSGrid2 from "./RandomSGrid2";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="bannerContainer">
        <Row>
          <Col lg="6" md="2" sm="12">
            <div className="bannerDiv">
              <h1>Stay curious.</h1>
              <p style={{ width: "440px" }}>
                Discover stories, thinking, and expertise from writers on any
                topic.
              </p>
              <button onClick={() => {}}>Start Reading</button>
            </div>
          </Col>
          <Col lg="6" md="10" sm="12">
            <div className="bannerSvg">
              <RandomSGrid2 />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;