import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useArgs } from 'storybook/internal/preview-api';

import { CodeInput } from '../ui/CodeInput';

const meta = {
  title: 'Example/CodeInput',
  component: CodeInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'search', 'tel', 'url', 'number'],
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
    destination: 'usermail@gmail.com',
    value: '234',
    hint: 'Enter it below to complete your sign in.',
    hideLabel: false,
    invalid: false,
    disabled: false,
  },
};
