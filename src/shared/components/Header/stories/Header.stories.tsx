import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Header } from '../ui';

const meta = {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <style>{`
        header {
          position: static !important;
        }
      `}</style>
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
