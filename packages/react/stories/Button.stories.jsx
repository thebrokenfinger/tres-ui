import React from 'react';
import { Button } from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      options: [1, 2, 3],
      control: {type: 'select'}
    },
    colorScheme: {
      options: ['gray', 'contrast', 'green', 'red', 'transparentWhite', 'transparentBlack'],
      control: {type: 'select'}
    }
  }
};

const Template = ({text, ...args}) => <Button {...args}>{text}</Button>;

export const Default = Template.bind({});
Default.args = {
  text: 'Button',
  size: 1,
  colorScheme: 'gray',
  ghost: false
};