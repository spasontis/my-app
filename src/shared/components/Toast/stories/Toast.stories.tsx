import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DEFAULT_VARIANT } from '../constants';
import { Toast } from '../ui';
import { ToastProvider, ToastViewport } from '@radix-ui/react-toast';

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
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: DEFAULT_VARIANT,
    text1: '',
    text2: '',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    text1: 'Успешно',
    text2: 'Вы были успешно авторизованы',
  },
};

export const Failed: Story = {
  args: {
    variant: 'failed',
    text1: 'Ошибка',
    text2: 'Произошла ошибка',
  },
};
