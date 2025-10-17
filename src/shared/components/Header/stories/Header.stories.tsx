import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Header } from '../ui/Header';
import { useTranslations } from 'next-intl';

import { Loader, Loader2, LogIn } from 'lucide-react';

const meta = {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
