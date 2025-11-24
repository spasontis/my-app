import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DEFAULT_VARIANT } from '../constants';
import { Toast } from '../ui';
import { useTranslations } from 'next-intl';

const meta = {
  title: 'Example/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'failed'],
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: DEFAULT_VARIANT,
    title: '',
    description: '',
  },
};

export const WithTranslations: Story = {
  render: (args) => {
    const t = useTranslations('translation');

    return (
      <Toast title={t(args.title as string)} description={t(args.description as string)}></Toast>
    );
  },
  args: {
    title: 'white',
    description: 'notifications.signIn',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Вы были успешно авторизованы',
  },
};

export const Failed: Story = {
  args: {
    variant: 'failed',
    title: 'Ошибка',
    description: 'Произошла ошибка',
  },
};
