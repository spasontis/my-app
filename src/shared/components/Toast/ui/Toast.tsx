import { Text } from '@/shared/components/Text';

import { DEFAULT_VARIANT, VARIANT_ICONS } from '../constants';
import { ToastProps } from '../types';

import styles from './Toast.module.css';
import clsx from 'clsx';

export function Toast({ variant = DEFAULT_VARIANT, title, description }: ToastProps) {
  const Icon = VARIANT_ICONS[variant];
  const variantClass = styles[`${variant}`];

  return (
    <div className={clsx(styles.toast, variantClass)}>
      <div className={styles.icon}>
        <Icon aria-hidden />
      </div>
      {(title || description) && (
        <div className={clsx(styles.label, (title || description) && styles.size)}>
          <Text variant='text1'>{title}</Text>
          <Text variant='text2'>{description}</Text>
        </div>
      )}
    </div>
  );
}
