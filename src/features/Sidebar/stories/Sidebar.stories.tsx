import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Sidebar } from '../ui';

const meta = {
  title: 'Example/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    activeTab: { control: 'select', options: ['menu', 'task', 'workspace', 'account', 'settings'] },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeTab: 'task',
  },
};
