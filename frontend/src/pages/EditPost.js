import React from "react";
import { Parser } from "@alkhipce/editorjs-react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { useEffect, useRef, useState } from "react";
import ImageTool from "@editorjs/image";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";

const NewPost = (props) => {
  let { state } = useLocation();
  console.log("state", state);
  const [postId, setPostId] = useState(state.id);
  const ejInstance = useRef();
  const [editorContent, setEditorContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const updatePost = async () => {
    const response = await axios.put(
      `http://localhost:3000/api/v1/posts/${postId}`,
      {
        data: editorContent,
      }
    );
    console.log("Post create Response ", response);
  };

  const initEditor = () => {
    console.log("data", editorContent);
    const editor = new EditorJS({
      holder: "editorjs",
      placeholder: "Let`s write an awesome story!",
      autofocus: false,
      data: editorContent,
      onReady: () => {
        console.log("Editor.js is ready to work!");
      },
      onChange: async () => {
        let content = await editor.saver.save();
        setEditorContent(content);
        updatePost();
      },
      tools: {
        heading: {
          class: Header,
          config: {
            placeholder: "Header",
          },
          shortcut: "CMD+SHIFT+H",
        },
        list: List,
        image: {
          class: ImageTool,
          config: {
            uploader: {
              async uploadByFile(file) {
                const formData = new FormData();
                formData.append("file", file);

                const response = await axios.post(
                  "http://localhost:3000/api/v1/posts/1/upload_image",
                  formData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                    withCredentials: false,
                  }
                );

                if (response.data.success === 1) {
                  console.log(response.data);
                  return response.data;
                }
              },
              async uploadByUrl(url) {
                const response = await axios.post(
                  "http://localhost:3000/api/uploadImage/createByUrl",
                  {
                    url,
                  }
                );

                if (response.data.success === 1) {
                  return response.data;
                }
              },
            },
            inlineToolbar: true,
          },
        },
      },
    });
  };

  useEffect(() => {
    if (ejInstance.current === null && !isLoading) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, [isLoading]);

  useEffect(() => {
    fetchPost().then((data) => {
      setEditorContent(data);
      setIsLoading(false);
    });
  }, []);

  const fetchPost = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/v1/posts/${postId}`,
      {
        data: editorContent,
      }
    );
    console.log("response", response.data.data);
    return response.data.data;
  };

  return <div id="editorjs"></div>;
};

export default NewPost;
