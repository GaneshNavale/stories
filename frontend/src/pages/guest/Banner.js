import { Col, Container, Row } from "react-bootstrap";
import "./Banner.scss";
import RandomSGrid2 from "./RandomSGrid2";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col>
            <div id="banner-img-box">
              <h1>Stay curious.</h1>
              <p>
                Discover stories, thinking, and expertise from writers on any
                topic.
              </p>
              <button onClick={() => {}}>
                {/* <PopupModal mainTitle="Start reading" /> */}
              </button>
            </div>
          </Col>
          <Col>
            <RandomSGrid2 />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
