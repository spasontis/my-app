import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Progress } from '../ui';

const meta = {
  title: 'Example/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percent: 23,
  },
};

export const Defaulft: Story = {
  args: {
    percent: 72,
  },
};
