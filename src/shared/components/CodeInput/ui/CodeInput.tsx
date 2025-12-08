'use client';

import React, { FC, useId } from 'react';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/components/Text';
import { Hint } from '@/shared/components/Hint';

import { CodeInputProps } from '../types';

import clsx from 'clsx';
import styles from './CodeInput.module.css';

export const CodeInput: FC<CodeInputProps> = ({
  destination,
  hint,
  value = '',
  invalid,
  hideLabel,
  disabled,
  className,
  onChange,
  ...props
}) => {
  const classes = clsx(styles.wrapper, className, disabled && styles.disabled);

  const t = useTranslations('translation.components');
  const inputId = useId();

  const stringValue = String(value);
  const digits = stringValue.padEnd(4, ' ');
  const activeIndex = Math.min(stringValue.length, 3);

  return (
    <label className={classes}>
      <div className={styles.text}>
        <Text color='content1' className={clsx(hideLabel && 'hidden')}>
          {t('codeInput.sentTo') + ' '}
          <span className={styles.destination}>{destination}</span>
        </Text>
        {hint && <Hint variant={invalid ? 'error' : 'default'}>{hint}</Hint>}
      </div>
      <div className={clsx(styles.otpWrapper, invalid && styles.invalid)}>
        <div className={styles.cells} onClick={() => document.getElementById(inputId)?.focus()}>
          {Array.from({ length: 4 }).map((_, i) => {
            const char = digits[i];
            const isEmpty = char === ' ';
            const isActive = i === activeIndex;
            const showCursor = isEmpty && isActive && !disabled;

            return (
              <div key={i} className={clsx(styles.cell, isActive && styles.active)}>
                {!isEmpty && char}
                {showCursor && <div className={styles.cursor} />}
              </div>
            );
          })}
        </div>
        <input
          id={inputId}
          name='otp'
          data-1p-ignore='true'
          data-lpignore='true'
          data-input-otp='true'
          inputMode='numeric'
          maxLength={4}
          disabled={disabled}
          value={value}
          onChange={onChange}
          aria-invalid={invalid}
          className={styles.realInput}
          {...props}
        />
      </div>
    </label>
  );
};
