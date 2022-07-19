import React from 'react';
import { Switch } from '../components/Switch';

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    checked: { control: 'boolean' },
    size: { control: 'select', options: ['1', '2'] },
  }
};

const Template = (props) => <Switch {...props} />;

export const Default = Template.bind({});
Default.args = {
  size: '1',
};