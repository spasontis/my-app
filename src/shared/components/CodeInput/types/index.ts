import { ComponentProps, Ref } from 'react';

export interface CodeInputProps extends ComponentProps<'input'> {
  destination: string;
  hint?: string;
  hideLabel?: boolean;
  invalid?: boolean;
  inputRef?: Ref<HTMLInputElement>;
}
