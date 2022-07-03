import React from 'react';
import {Text } from '../components/Text'

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    size: {
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      control: {type: 'select'}
    },
    colorScheme: {
      options: ['red', 'blue', 'green', 'yellow', 'gray', 'contrast'],
      control: {type: 'select'}
    }
  }
};

const Template = ({text, ...args}) => <Text {...args}>{text}</Text>;

export const Default = Template.bind({});
Default.args = {
  text: 'Lorem ipsum',
  size: '3',
  colorScheme: 'gray'
};