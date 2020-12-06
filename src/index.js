import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ReactTabContentView from "./components/ReactTabContentView";

const initialState = {
  titleType: "chips",
  titleDelete: false,
  data: [
    {
      title: "Joey",
      content: "Joey doesn't share fooooodddd.....",
    },
    {
      title: "Monica",
      content: "Until I was 25 I thought the only response to \'I love you\' was \'Oh crap!\'",
      default: false,
    },
    {
      title: "Chandler",
      content: "I can handle this. Handle is my middle name. Actually, handle is the middle of my first name.",
      default: true,
    },
    {
      title: "Phoebe",
      content: "If you want to receive e-mails about my upcoming shows, please give me money so I can buy a computer.",
    },
    {
      title: "Ross",
      content: "Pivot! Pivot! Pivot! Pivot! Pivot!",
    },
    {
      title: "Rachel",
      content: "I'm not supposed to put beef in the trifle!",
    },
  ],
};

ReactDOM.render(
  <ReactTabContentView src={initialState} />,
  document.getElementById("root")
);
