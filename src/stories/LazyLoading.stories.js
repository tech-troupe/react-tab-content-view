import React from "react";
import ReactTabContentView from "../components/ReactTabContentView";

const withoutContent = {
  data: [
    {
      title: "English",
      default: true,
    },
    {
      title: "Tamil",
    },
    {
      title: "Russian",
    },
    {
      title: "Spanish",
    },
    {
      title: "French",
    },
    {
      title: "Russian",
    },
    {
      title: "Chinese",
    },
    {
      title: "Latin",
    },
  ],
};

const searchResult = [
  {
    title: "Tamil",
    count: 2,
  },
  {
    title: "Spanish",
    count: 3,
  },
  {
    title: "Russian",
    count: 9,
  },
  {
    title: "Hindi",
    count: 7,
  },
  {
    title: "Chinese",
    count: 11,
  },
  {
    title: "French",
    count: 4,
  },
];

export default {
  title: "Test Case 2/LazyLoading",
  component: ReactTabContentView,
};

export const BasicTitlesWithoutContent = (args) => (
  <ReactTabContentView
    {...args}
    searchResult={searchResult}
    src={withoutContent}
  />
);
