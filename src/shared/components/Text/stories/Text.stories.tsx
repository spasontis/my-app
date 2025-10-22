import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DEFAULT_ELEMENT } from '../constants';
import { Text } from '../ui';

import { useTranslations } from 'next-intl';

const meta = {
  title: 'Example/Text',
  component: Text,
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
    },
    variant: {
      control: { type: 'select' },
      options: [
        'title1',
        'title2',
        'title3',
        'title4',
        'title5',
        'text1',
        'text2',
        'caption',
        'button',
      ],
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

export const Title1: Story = {
  args: {
    as: DEFAULT_ELEMENT,
    variant: 'title1',
    color: 'primary',
    children: 'Text',
  },
};

export const Title2: Story = {
  args: {
    as: DEFAULT_ELEMENT,
    variant: 'title2',
    color: 'content1',
    children: 'Text',
  },
};

export const Title3: Story = {
  args: {
    as: DEFAULT_ELEMENT,
    variant: 'title3',
    color: 'content1',
    children: 'Text',
  },
};

export const Title4: Story = {
  args: {
    as: DEFAULT_ELEMENT,
    variant: 'title4',
    color: 'error',
    children: 'Text',
  },
};

export const Title5: Story = {
  args: {
    as: DEFAULT_ELEMENT,
    variant: 'title5',
    color: undefined,
    children: 'Text',
  },
};

export const Text1: Story = {
  args: {
    as: DEFAULT_ELEMENT,
    variant: 'text1',
    color: undefined,
    children: 'Text',
  },
};

export const Text2: Story = {
  args: {
    as: DEFAULT_ELEMENT,
    variant: 'text2',
    color: undefined,
    children: 'Text',
  },
};

export const Caption: Story = {
  args: {
    as: DEFAULT_ELEMENT,
    variant: 'caption',
    color: undefined,
    children: 'Text',
  },
};

export const Button: Story = {
  args: {
    as: DEFAULT_ELEMENT,
    variant: 'button',
    color: undefined,
    children: 'Text',
  },
};
