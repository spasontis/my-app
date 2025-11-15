import React, { FC } from 'react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Close, Description, Root, Title } from '@radix-ui/react-toast';

import { Text } from '@/shared/components/Text';

import { DEFAULT_VARIANT, VARIANT_ICONS } from '../constants';
import { ToastProps } from '../types';

import { X } from 'lucide-react';

import clsx from 'clsx';

import styles from './Toast.module.css';

export const Toast: FC<ToastProps> = ({
  variant = DEFAULT_VARIANT,
  text1,
  text2,
  className,
  ...props
}) => {
  const t = useTranslations('translation');
  const Icon = VARIANT_ICONS[variant];
  const iconVariantClass = styles[`${variant}Icon`];

  return (
    <Root {...props} asChild>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={clsx(styles.container, styles[variant], className)}
      >
        <div className={styles.iconWrapper}>
          <Icon aria-hidden className={clsx(styles.icon, iconVariantClass)} />
        </div>
        <div className={styles.textWrapper}>
          <Title asChild>
            <Text variant='text1'>{text1}</Text>
          </Title>
          {text2 && (
            <Description asChild>
              <Text variant='text2'>{text2}</Text>
            </Description>
          )}
        </div>
        <Close aria-label={t('common.close')}>
          <X aria-hidden className={styles.icon} />
        </Close>
      </motion.div>
    </Root>
  );
};
