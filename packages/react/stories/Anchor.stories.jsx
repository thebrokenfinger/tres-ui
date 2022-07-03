import React from 'react';
import { Anchor } from '../components/Anchor'

export default {
  title: 'Anchor',
  component: Anchor,
  argTypes: {
    colorScheme: {
      options: ['blue', 'subtle', 'contrast'],
      control: {type: 'select'}
    }
  }
};

const Template = ({text, ...args}) => <Anchor {...args}>{text}</Anchor>;

export const Default = Template.bind({});
Default.args = {
  text: 'Lorem ipsum',
  colorScheme: 'contrast'
};