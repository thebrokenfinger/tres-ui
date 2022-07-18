import React from 'react';
import { Flex } from '../components/Flex';
import { Checkbox } from '../components/Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      options: [1, 2],
      control: {type: 'select'}
    },
    colorScheme: {
      options: ['gray', 'blue'],
      control: {type: 'select'}
    }
  }
};

const Template = (props) => (
  <Flex gap="2">
    <Checkbox {...props} />
    <Checkbox {...props} />
  </Flex>
);

export const Default = Template.bind({});
Default.args = {
  size: 1,
  colorScheme: 'gray',
};