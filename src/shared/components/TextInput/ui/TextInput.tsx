import React, { FC, useId, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/components/Text';
import { Hint } from '@/shared/components/Hint';

import { TextInputProps } from '../types';
import { DEFAULT_TYPE } from '../constants';

import { Eye, EyeOff } from 'lucide-react';

import clsx from 'clsx';

import styles from './TextInput.module.css';

export const TextInput: FC<TextInputProps> = ({
  label,
  hint,
  type = DEFAULT_TYPE,
  value,
  invalid,
  hideLabel,
  endIcon,
  disabled,
  className,
  ...props
}) => {
  const classes = clsx(styles.wrapper, className, disabled && styles.disabled);
  const [showPassword, setShowPassword] = useState(false);

  const t = useTranslations('');
  const inputId = useId();

  const isPassword = type === 'password';
  const PasswordIcon = showPassword ? <Eye /> : <EyeOff />;
  const inputType = isPassword && showPassword ? 'text' : type;

  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className={classes}>
      <label>
        <Text className={clsx(hideLabel && 'hidden')}>{label}</Text>
        <div className={clsx(styles.input, invalid && styles.invalid)}>
          <input
            id={inputId}
            type={inputType}
            value={value}
            className={clsx(styles.control, isPassword && styles.password)}
            disabled={disabled}
            aria-invalid={invalid}
            {...props}
          />
          {isPassword ? (
            <button
              type='button'
              onClick={handleClick}
              className={styles.button}
              aria-label={
                showPassword ? t('auth.button.hide.Password') : t('auth.button.showPassword')
              }
            >
              {PasswordIcon}
            </button>
          ) : (
            endIcon && <span className={styles.icon}>{endIcon}</span>
          )}
        </div>
      </label>
      {hint && <Hint variant={invalid ? 'error' : 'default'}></Hint>}
    </div>
  );
};
