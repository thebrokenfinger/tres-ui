import React from 'react';
import { VideoIcon } from '@radix-ui/react-icons';
import { IconButton } from '../components/IconButton';

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    size: {
      options: [1, 2, 3, 4],
      control: {type: 'select'}
    },
    variant: {
      options: ['ghost', 'raised'],
      control: {type: 'select'}
    },
    state: {
      options: ['default', 'active', 'waiting'],
      control: {type: 'select'}
    }
  }
};

const Template = (props) => <IconButton {...props}><VideoIcon /></IconButton>;

export const Default = Template.bind({});
Default.args = {
  size: 1,
  variant: 'ghost',
  state: 'default'
};