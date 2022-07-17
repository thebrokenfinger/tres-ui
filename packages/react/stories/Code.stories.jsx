import React from 'react';
import { Code } from '../components/Code';

export default {
  title: 'Code',
  component: Code,
  argTypes: {
    colorScheme: {
      options: ['gray', 'blue'],
      control: {type: 'select'}
    }
  }
};

const Template = ({text, ...args}) => <Code {...args}>{text}</Code>;

export const Default = Template.bind({});
Default.args = {
  text: 'User.all',
  colorScheme: 'gray',
};