import React from 'react';
import { TextField } from '../components/TextField'

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    size: {
      options: [1, 2, 3],
      control: {type: 'select'}
    },
    variant: {
      options: ['ghost'],
      control: {type: 'select'}
    },
    state: {
      options: ['invalid', 'valid'],
      control: {type: 'select'}
    },
    cursor: {
      options: ['default', 'text'],
      control: {type: 'select'}
    },
    as: {
      control: { disable: true }
    },
    css: {
      control: { disable: true }
    }
  }
};

const Template = ({text, ...args}) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Your email',
  size: 1,
};