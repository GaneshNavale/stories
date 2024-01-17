import axios from "axios";
import { useEffect, useState } from "react";
import { Parser, Paragraph, Header } from "@alkhipce/editorjs-react";
import { Link } from "react-router-dom";
import NewPost from "./EditPost";

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
      {!state.isLoading &&
        state.posts.map((post) => {
          console.log("blocks", post.data?.blocks);
          const paragraphs = post.data?.blocks.filter(
            (item) => item.type === "paragraph"
          );
          const heading = post.data?.blocks.find(
            (item) => item.type === "heading" && item.data.level === 2
          );
          return (
            <div className="story">
              {heading && (
                <Link to="/editPost" state={{ id: post.id }}>
                  <Header level={1} text={heading.data.text} />
                </Link>
              )}
              {(paragraphs || []).map((item) => {
                return <Paragraph key={item.id} text={item.data.text} />;
              })}
            </div>
          );
        })}
    </>
  );
};

export default Home;