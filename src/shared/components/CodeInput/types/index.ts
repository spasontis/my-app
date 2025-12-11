import { ComponentProps, Ref } from 'react';

export interface CodeInputProps extends ComponentProps<'input'> {
  length: number;
  destination: string;
  hint?: string;
  active?: boolean;
  hideLabel?: boolean;
  invalid?: boolean;
  inputRef?: Ref<HTMLInputElement>;
}
