import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DisplayPost.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"; // Fix import statement
import Container from "react-bootstrap/Container";
import { Paragraph, Header } from "@alkhipce/editorjs-react";
import { useLocation, Link } from "react-router-dom";

const DisplayPost = (props) => {
  let { state } = useLocation();
  console.log("state", state);
  const [postId, setPostId] = useState(state.id);
  const [post, setPost] = useState({});

  useEffect(() => {
    fetchPost().then((data) => {
      setPost(data);
    });
  }, [postId]);

  const fetchPost = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/v1/posts/${postId}`
    );
    console.log("response", response.data.data);
    return response.data.data;
  };

  const calculateAverageReadingTime = (text) => {
    if (!text || typeof text !== "string" || text.trim() === "") {
      console.error("Invalid paragraph input. Expected a non-empty string.");
      return 0;
    }

    const words = text.split(/\s+/).filter((word) => word.length > 0).length;
    const wordsPerMinute = 200;
    const readingTimeMinutes = words / wordsPerMinute;
    const readingTimeRounded = Math.ceil(readingTimeMinutes);

    return readingTimeRounded;
  };

  const calculateTotalReadingTime = () => {
    let totalReadingTime = 0;

    if (post.blocks) {
      post.blocks.forEach((block) => {
        if (block.type === "paragraph") {
          const paragraphReadingTime = calculateAverageReadingTime(
            block.data.text
          );
          totalReadingTime += paragraphReadingTime;
        }
      });
    }

    return totalReadingTime;
  };

  return (
    <>
      <Link to="/">Home</Link>
      <div className="display-story" key={postId}>
        <Container>
          <Row>
            <Col sm={4}></Col>
            <Col sm={6} className="text-left">
              <div>
                <p className="total-time">
                  {calculateTotalReadingTime()}Min Read
                </p>
                {post.blocks &&
                  post.blocks.map((block, index) => (
                    <div key={index}>
                      {block.type === "image" && (
                        <img
                          src={block.data.file.url}
                          style={{ width: "100%", height: "auto" }}
                        />
                      )}
                      {block.type === "heading" && (
                        <Header
                          level={1}
                          text={block.data.text}
                          style={{ fontSize: "20px" }}
                        />
                      )}
                      {block.type === "paragraph" && (
                        <Paragraph id={postId} text={block.data.text} />
                      )}
                      {console.log(block.data.text)}
                    </div>
                  ))}
              </div>
            </Col>
            <Col sm={2}></Col>
          </Row>
        </Container>
        <Container className="mt-3">
          <Row>
            <Col sm={5}></Col>
            <Col sm={1}>
              <i className="bi bi-chat"></i>
            </Col>
            <Col sm={1}>
              <i className="bi bi-bookmarks"></i>
            </Col>
            <Col sm={1}>
              <i className="bi bi-box-arrow-up"></i>
            </Col>
            <Col sm={1}>
              <i className="bi bi-list"></i>
            </Col>
            <Col sm={3}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DisplayPost;
