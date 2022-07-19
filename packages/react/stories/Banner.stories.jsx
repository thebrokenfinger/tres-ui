import React from 'react';
import { Banner } from '../components/Banner';

export default {
  title: 'Banner',
  component: Banner,
  argTypes: {
    colorScheme: {
      options: ['gray', 'blue', 'contrast'],
      control: {type: 'select'}
    },
    rounded: {
      options: ['true', 'false'],
      control: {type: 'select'},
    },
  }
};

const Template = ({ children, ...args }) => <Banner {...args}>{children}</Banner>;

export const Default = Template.bind({});
Default.args = {
  children: "Hi, I'm a banner!",
  colorScheme: 'gray',
  rounded: 'false',
};