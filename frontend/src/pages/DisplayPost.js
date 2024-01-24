import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DisplayPost.scss";
import Container from "react-bootstrap/Container";
import { Paragraph, Header } from "@alkhipce/editorjs-react";
import { useLocation, Link } from "react-router-dom";

const DisplayPost = () => {
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
          <div>
            <p className="total-time">{calculateTotalReadingTime()}Min Read</p>
            {post.blocks &&
              post.blocks.map((block, index) => (
                <div key={index}>
                  {block.type === "image" && (
                    <img
                      src={block.data.file.url}
                      style={{ width: "735px", height: "auto" }}
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
          <div className="display-icon-first">
            <span>
              <i class="bi bi-chat"></i>
            </span>
            <span className="dist"></span>
            <span>
              <i class="bi bi-bookmarks"></i>
            </span>
            <span className="dist"></span>
            <span>
              <i class="bi bi-box-arrow-up"></i>
            </span>
            <span className="dist"></span>
            <span>
              <i class="bi bi-list"></i>
            </span>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DisplayPost;
