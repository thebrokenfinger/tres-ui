import React from 'react';
import { RadioGroup, Radio } from '../components/Radio';

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    size: {
      options: ['1', '2'],
      control: {type: 'select'}
    },
    colorScheme: {
      options: ['gray', 'blue'],
      control: {type: 'select'}
    },
  }
};

const Template = (props) => (
  <RadioGroup defaultValue="1">
    <Radio value="1" css={{ mr: '$5' }} {...props} />
    <Radio value="2" css={{ mr: '$5' }} {...props} />
  </RadioGroup>
);

export const Default = Template.bind({});
Default.args = {
  size: '1',
  colorScheme: 'gray',
};
