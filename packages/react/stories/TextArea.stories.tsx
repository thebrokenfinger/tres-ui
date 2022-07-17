import React from "react";
import { TextArea } from "../components/TextArea";

export default {
  title: "TextArea",
  component: TextArea,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    state: {
      options: ["invalid", "valid"],
      control: { type: "select" },
    },
    cursor: {
      options: ["default", "text"],
      control: { type: "select" },
    },
    as: {
      control: { disable: true },
    },
    css: {
      control: { disable: true },
    },
  },
};

const Template = ({ text, ...args }) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Your email",
  size: "sm",
};
