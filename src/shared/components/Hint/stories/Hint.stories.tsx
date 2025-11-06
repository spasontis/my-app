import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hint } from '../ui/Hint';

const meta = {
  title: 'Example/Hint',
  component: Hint,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'warning', 'error', 'success'],
    },
  },
} satisfies Meta<typeof Hint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Button',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Button',
  },
};
