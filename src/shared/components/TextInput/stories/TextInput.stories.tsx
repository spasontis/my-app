import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useArgs } from 'storybook/internal/preview-api';

import { TextInput } from '../ui/TextInput';
import { DEFAULT_TYPE } from '../constants';

import { CheckCircle } from 'lucide-react';

const meta = {
  title: 'Example/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'search', 'tel', 'url', 'number'],
    },
    endIcon: {
      control: 'select',
      options: ['SuccessIcon'],
      mapping: {
        SuccessIcon: <CheckCircle />,
      },
    },
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();
    return (
      <TextInput
        {...args}
        value={value}
        onChange={(event) => updateArgs({ value: event.target.value })}
      />
    );
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: DEFAULT_TYPE,
    label: 'Label text',
    placeholder: '',
    value: '',
    hint: '',
    endIcon: undefined,
    hideLabel: false,
    invalid: false,
    disabled: false,
  },
};
