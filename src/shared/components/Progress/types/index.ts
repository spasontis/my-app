import { ComponentProps } from 'react';

export interface ProgressProps extends ComponentProps<'progress'> {
  percent: number;
  className?: string;
}
