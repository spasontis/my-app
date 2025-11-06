import clsx from 'clsx';
import React, { FC } from 'react';

import { Text } from '@/shared/components/Text';

export const TextInput: FC<TextInputProps> = ({
  label,
  hint,
  type,
  value,
  invalid,
  hideLabel,
  endIcon,
  disabled,
  className,
  ...props
}) => {
  return (
    <div>
      <label>
        <Text className={clsx(hideLabel && 'hidden')}>{label}</Text>
      </label>
      TextInput
    </div>
  );
};
