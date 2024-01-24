import axios from "axios";
import { useEffect, useState } from "react";
import { Parser, Paragraph, Header } from "@alkhipce/editorjs-react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../components/BlogList.scss";

const Blogs = () => {
  const [state, setState] = useState({ posts: [], isLoading: true });

  useEffect(() => {
    getPosts().then((response) => {
      setState({ posts: response.data.posts, isLoading: false });
    });
  }, []);

  const getPosts = async () => {
    const response = await axios.get(`http://localhost:3000/api/v1/posts`);
    return response;
  };

  function formatCreatedAt(createdAt) {
    const date = new Date(createdAt);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  const handleRemove = (id) => {
    const updatedPosts = state.posts.filter((post) => post.id !== id);
    setState({ ...state, posts: updatedPosts });
  };

  return (
    <>
      {!state.isLoading &&
        state.posts.map((post) => {
          const paragraphs = post.data?.blocks?.filter(
            (item) => item.type === "paragraph"
          );
          const heading = post.data?.blocks?.find(
            (item) => item.type === "heading" && item.data.level === 2
          );

          const image = post.data?.blocks?.find(
            (item) => item.type === "image"
          );

          const firstParagraph =
            paragraphs && paragraphs.length > 0 ? paragraphs[0] : null;
          const formattedDate = formatCreatedAt(post.created_at);

          return (
            <Container>
              <Row>
                <Col md={8}>
                  <div className="main-Container" key={post.id}>
                    <div className="story">
                      <div className="display">
                        {heading && (
                          <Link
                            to="/displayPost"
                            state={{ id: post.id }}
                            className="post-link"
                          >
                            <Header
                              level={1}
                              text={heading.data.text}
                              className="header"
                            />
                          </Link>
                        )}
                        {firstParagraph && (
                          <div className="paragraph">
                            <Link
                              to="/displayPost"
                              state={{ id: post.id }}
                              className="post-link"
                            >
                              <Paragraph
                                key={firstParagraph.id}
                                text={firstParagraph.data.text}
                              />
                            </Link>
                          </div>
                        )}
                        {formattedDate && (
                          <div className="date-display">
                            <div className="icon-list">
                              <p>
                                {formattedDate}
                                <i className="distance"></i>
                                <span>
                                  <i className="b1 bi bi-bookmarks"></i>
                                </span>
                                <span onClick={() => handleRemove(post.id)}>
                                  <i className="b1 bi bi-dash-circle"></i>
                                </span>
                                <span>
                                  <i className="b1 bi bi-list"></i>
                                </span>
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="div-image">
                    {image && (
                      <Link to="/displayPost" state={{ id: post.id }}>
                        <img
                          src={image.data.file.url}
                          alt="Post"
                          className="post-image"
                        />
                      </Link>
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
          );
        })}
    </>
  );
};

export default Blogs;
