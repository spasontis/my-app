import { FC } from 'react';
import { clsx } from 'clsx';

import { TextProps } from '../types';
import { DEFAULT_ELEMENT } from '../constants';

import styles from './Text.module.css';

export const Text: FC<TextProps> = ({ className, color, as = DEFAULT_ELEMENT, ...props }) => {
  const Component = as;

  return <Component className={clsx(color && styles[color], className)} {...props} />;
};
