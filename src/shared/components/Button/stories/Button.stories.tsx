import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { useTranslations } from '@/shared/configs/i18n';

import { Button } from '../ui/Button';

const meta = {
  title: 'Example/Header',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const t = useTranslations();

    return <Button label={t(args.label)} />;
  },
  args: {
    label: 'header.buttons.signIn',
  },
};
