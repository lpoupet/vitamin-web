import React from 'react';
import { VtmnChip } from '@vtmn/react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/selection-controls/chip.csf';

export default {
  title: 'Components / Selection controls / VtmnChip',
  component: VtmnChip,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnChip {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  onClick: () => action('Chip clicked'),
  onCancel: () => action('Filter canceled'),
};
