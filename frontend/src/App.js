import "./App.css";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { useEffect, useRef, useState } from "react";
import SimpleImage from "simple-image-editorjs";
import { Parser, Table } from "@alkhipce/editorjs-react";

function App() {
  const ejInstance = useRef();
  const [editorContent, setEditorContent] = useState({});

  const DEFAULT_INITIAL_DATA = {
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: {
          text: "This is my awesome editor!",
          level: 1,
        },
      },
    ],
  };

  const initEditor = () => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      holder: "editorjs",
      placeholder: "Let`s write an awesome story!",
      autofocus: false,
      data: {},
      onReady: () => {
        console.log("Editor.js is ready to work!");
      },
      onChange: async () => {
        let content = await editor.saver.save();

        console.log(content);
        setEditorContent(content);
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
          class: SimpleImage,
          inlineToolbar: true,
          config: {
            placeholder: "Paste image URL",
          },
        },
      },
    });
  };

  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return (
    <>
      <div id="editorjs"></div>
      {/* <Parser data={editorContent} /> */}
    </>
  );
}

export default App;
