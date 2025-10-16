import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Text } from '../ui/Text';
import { DEFAULT_ELEMENT } from '../constants';
import { useTranslations } from 'next-intl';

const meta = {
  title: 'Example/Header',
  component: Text,
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'black', 'white', 'content1', 'content2', 'error'],
    },
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: DEFAULT_ELEMENT,
    color: undefined,
    children: 'Text',
  },
};

export const WithI18n: Story = {
  render: (args) => {
    const t = useTranslations('translations');

    return <Text>{t(args.children as string)}</Text>;
  },
  args: {
    as: DEFAULT_ELEMENT,
    color: undefined,
    children: 'header.buttons.signIn',
  },
};
