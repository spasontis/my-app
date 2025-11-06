import { ComponentProps } from 'react';

export type HintVariant = 'default' | 'warning' | 'error' | 'success';

export interface HintProps extends ComponentProps<'div'> {
  variant?: HintVariant;
}
