import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Homepage from 'src/pages/index';

export default {
  title: 'Homepage',
  component: Homepage,
} as Meta;

const Template: Story = (args: any) => <Homepage />;

export const Default = Template.bind({});

Default.args = {};
