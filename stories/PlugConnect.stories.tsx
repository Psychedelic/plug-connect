import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from '../src';

const meta: Meta = {
  title: 'Plug',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<any> = args => <Button {...args} />;

export const PlugConnect = Template.bind({});

PlugConnect.args = {
  dark: true,
  title: 'Connect to Plug',
  onConnectCallback: () => console.log('Runs a callback'),
};