import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Text } from '../ui/Text';
import { DEFAULT_ELEMENT } from '../constants';

import { useTranslations } from 'next-intl';

const meta = {
  title: 'Example/Text',
  component: Text,
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
    },
    color: {
      control: { type: 'select' },
      options: ['black', 'white', 'content1', 'content2', 'error'],
    },
  },
  tags: ['autodocs'],
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

export const With_translations: Story = {
  render: (args) => {
    const t = useTranslations('translation');

    return <Text color={args.color}>{t(args.children as string)}</Text>;
  },
  args: {
    as: DEFAULT_ELEMENT,
    color: 'white',
    children: 'header.buttons.signIn',
  },
};
