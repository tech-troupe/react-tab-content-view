import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ReactTabContentView from "./components/ReactTabContentView";

const initialState = {
  titleType: "chips",
  titleDelete: false,
  data: [
    {
      title: "title1",
      content: "content1",
    },
    {
      title: "title2",
      content: "content2",
      default: true,
    },
    {
      title: "title3",
      content: "content3",
    },
    {
      title: "title4",
      content: "content4",
    },
  ],
};

ReactDOM.render(
  <ReactTabContentView src={initialState} />,
  document.getElementById("root")
);
