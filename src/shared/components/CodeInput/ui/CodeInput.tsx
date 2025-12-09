'use client';

import React, { FC, useState, useId, useEffect } from 'react';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/components/Text';
import { Hint } from '@/shared/components/Hint';

import { CodeInputProps } from '../types';

import clsx from 'clsx';

import styles from './CodeInput.module.css';

export const CodeInput: FC<CodeInputProps> = ({
  length,
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
  const [isFocused, setIsFocused] = useState(false);
  const inputId = useId();

  const stringValue = String(value);
  const digits = stringValue.padEnd(length, ' ');
  const activeIndex = Math.min(stringValue.length, length - 1);

  useEffect(() => {
    if (stringValue.length === length) {
      setIsFocused(false);
      const input = document.getElementById(inputId) as HTMLInputElement | null;
      input?.blur();
    }
  }, [stringValue, length, inputId]);

  return (
    <label className={classes}>
      <div className={styles.text}>
        <Text color='content1' className={clsx(hideLabel && 'hidden')}>
          {t('codeInput.sentTo') + ' '}
          <span className={styles.destination}>{destination}</span>
        </Text>
        {hint && <Hint variant={invalid ? 'error' : 'default'}>{hint}</Hint>}
      </div>
      <div className={styles.cells} onClick={() => document.getElementById(inputId)?.focus()}>
        {Array.from({ length: length }).map((_, i) => {
          const char = digits[i];
          const isEmpty = char === ' ';
          const isActive = i === activeIndex;
          const showCursor = isFocused && isEmpty && isActive && !disabled;
          return (
            <div
              key={i}
              className={clsx(
                styles.cell,
                invalid && styles.invalid,
                isActive && isFocused && styles.active,
              )}
              tabIndex={0}
            >
              {!isEmpty && char}
              {showCursor && <div className={styles.cursor} />}
            </div>
          );
        })}

        <input
          id={inputId}
          maxLength={length}
          disabled={disabled}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
          aria-invalid={invalid}
          className={clsx(styles.control)}
          {...props}
        />
      </div>
    </label>
  );
};
