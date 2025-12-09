import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useArgs } from 'storybook/internal/preview-api';

import { CodeInput } from '../ui/CodeInput';

const meta = {
  title: 'Example/CodeInput',
  component: CodeInput,
  tags: ['autodocs'],
  argTypes: {
    length: {
      control: 'number',
    },
    destination: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    hint: {
      control: 'text',
    },
    hideLabel: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();
    return (
      <CodeInput
        {...args}
        value={value}
        onChange={(event) => updateArgs({ value: event.target.value })}
      />
    );
  },
} satisfies Meta<typeof CodeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    length: 4,
    destination: 'usermail@gmail.com',
    value: '',
    hint: 'Enter it below to complete your sign in.',
    hideLabel: false,
    invalid: false,
    disabled: false,
  },
};

export const Invalid: Story = {
  args: {
    length: 4,
    destination: 'usermail@gmail.com',
    value: '1',
    hint: 'Enter it below to complete your sign in.',
    invalid: true,
  },
};

export const NotFull: Story = {
  args: {
    length: 4,
    destination: 'usermail@gmail.com',
    value: '234',
    hint: 'Enter it below to complete your sign in.',
  },
};

export const Filled: Story = {
  args: {
    length: 4,
    destination: 'usermail@gmail.com',
    value: '2343',
    hint: 'Enter it below to complete your sign in.',
  },
};

export const Hided: Story = {
  args: {
    length: 4,
    destination: 'usermail@gmail.com',
    value: '2343',
    hideLabel: true,
  },
};

export const Big: Story = {
  args: {
    length: 6,
    destination: 'usermail@gmail.com',
    hint: 'Enter it below to complete your sign in.',
  },
};
