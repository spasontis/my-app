import clsx from 'clsx';
import React, { FC } from 'react';

import styles from './Hint.module.css';
import { HintProps } from '../types';
import { DEFAULT_VARIANT, ICON } from '../constants';

import { Text } from '@/shared/components/Text';

export const Hint: FC<HintProps> = ({ variant = DEFAULT_VARIANT, children, ...props }) => {
  const IconComponent = variant !== 'default' ? ICON[variant] : undefined;

  return (
    <div className={styles.hint} {...props}>
      {IconComponent && (
        <IconComponent className={clsx(styles.icon, styles[variant])} aria-hidden />
      )}
      <Text variant='text2' className={styles[variant]}>
        {children}
      </Text>
    </div>
  );
};
