import React from 'react';
import { Heading } from '../components/Heading'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    size: {
      options: ['1', '2', '3', '4'],
      control: {type: 'select'}
    },
    colorScheme: {
      options: ['red', 'blue', 'green', 'yellow', 'gray', 'contrast'],
      control: {type: 'select'}
    }
  }
};

const Template = ({text, ...args}) => <Heading {...args}>{text}</Heading>;

export const Default = Template.bind({});
Default.args = {
  text: 'Lorem ipsum',
  size: '3',
  colorScheme: 'gray',
  as: 'h1'
};