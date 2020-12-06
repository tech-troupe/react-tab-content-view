import React from 'react'
import ReactTabContentView from "../components/ReactTabContentView"

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

export default {
    title: 'Component/ReactTabContentView',
    component: ReactTabContentView,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };


const Template = args => <ReactTabContentView {...args} src={initialState} />;
export const state1 = Template.bind({});