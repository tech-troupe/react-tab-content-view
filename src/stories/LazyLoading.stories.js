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
    ],
  };

  const searchResult = [
      {
        title: "Tamil",
        count: 2
  },
   {
        title: "Spanish",
        count: 3
  },
]
  
  export default {
    title: "Test Case 2/LazyLoading",
    component: ReactTabContentView,
  };
  

export const BasicTitlesWithoutContent = (args) => (
    <ReactTabContentView {...args} searchResult={searchResult} src={withoutContent}  />
  );
  