import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Stepper } from '../ui';

const meta = {
  title: 'Example/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: 3,
    current: 2,
    incomplete: true,
  },
};
