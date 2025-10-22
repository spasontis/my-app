import { FC } from 'react';
import { clsx } from 'clsx';

import { TextProps } from '../types';
import { DEFAULT_VARIANT, DEFAULT_ELEMENT } from '../constants';

import styles from './Text.module.css';

export const Text: FC<TextProps> = ({
  variant = DEFAULT_VARIANT,
  color,
  weight,
  as = DEFAULT_ELEMENT,
  className,
  ...props
}) => {
  const Component = as;

  return (
    <Component
      className={clsx(
        styles[variant],
        color && styles[color],
        weight && styles[`w${weight}`],
        className,
      )}
      {...props}
    />
  );
};
