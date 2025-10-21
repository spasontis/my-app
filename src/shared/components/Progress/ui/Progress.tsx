import clsx from 'clsx';
import { FC } from 'react';

import { ProgressProps } from '../types';
import { normalizePercent } from '../lib';

import styles from './Progress.module.css';

export const Progress: FC<ProgressProps> = ({ percent, className, ...props }) => {
  const normalizedPercent = normalizePercent(percent);
  const minWidth = normalizedPercent === 0;

  return (
    <div className={clsx(styles.progress, className)}>
      <progress
        className='hidden'
        value={normalizedPercent}
        max={100}
        aria-valuenow={normalizedPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        {...props}
      />
      <div
        className={clsx(styles.fill, { [styles.circle]: minWidth })}
        style={!minWidth ? { inlineSize: `${normalizedPercent}%` } : undefined}
      />
    </div>
  );
};
