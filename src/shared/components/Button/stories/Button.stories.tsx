import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { useTranslations } from 'next-intl';

import { DEFAULT_ICON_SIDE, DEFAULT_SIZE } from '../constants';
import { Button } from '../ui';

import { Loader, Loader2, LogIn } from 'lucide-react';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'select', options: ['button', 'a', 'Link'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    icon: {
      control: { type: 'select' },
      options: ['LogIn', 'Loader', 'Loader2'],
      mapping: {
        LogIn: <LogIn />,
        Loader: <Loader />,
        Loader2: <Loader2 />,
      },
    },
    iconSide: { control: 'select', options: ['start', 'end'] },
    loading: { control: 'boolean', if: { arg: 'as', eq: 'button' } },
    disabled: { control: 'boolean', if: { arg: 'as', eq: 'button' } },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    as: 'button',
    size: DEFAULT_SIZE,
    iconSide: DEFAULT_ICON_SIDE,
    fullWidth: false,
    loading: false,
    disabled: false,
  },
};

export const With_translations: Story = {
  render: (args) => {
    const t = useTranslations('translation');
    return (
      <Button icon={args.icon} size={args.size} iconSide={args.iconSide} fullWidth={args.fullWidth}>
        {t(args.children as string)}
      </Button>
    );
  },
  args: {
    children: 'header.buttons.signIn',
    as: 'button',
    size: 'md',
    icon: <LogIn />,
    iconSide: 'end',
    fullWidth: false,
    loading: false,
    disabled: false,
  },
};
