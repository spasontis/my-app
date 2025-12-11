'use client';

import React, { FC, useId } from 'react';
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
  active = false,
  invalid,
  hideLabel,
  disabled,
  inputRef,
  className,
  onFocus,
  onBlur,
  onChange,
  ...props
}) => {
  const classes = clsx(styles.wrapper, className, disabled && styles.disabled);

  const t = useTranslations('translation.components');

  const inputId = useId();

  const stringValue = String(value);
  const digits = stringValue.padEnd(length, ' ');
  const activeIndex = Math.min(stringValue.length, length - 1);

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
          const showCursor = active && isEmpty && isActive && !disabled;
          return (
            <div
              key={i}
              className={clsx(
                styles.cell,
                invalid && styles.invalid,
                isActive && active && styles.active,
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
          ref={inputRef}
          aria-invalid={invalid}
          className={clsx(styles.control)}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          {...props}
        />
      </div>
    </label>
  );
};
