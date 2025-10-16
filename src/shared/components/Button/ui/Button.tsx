import { clsx } from 'clsx';
import { DEFAULT_SIZE, DEFAULT_ICON_SIDE } from '../constants';
import { ButtonProps } from '../types';

import SpinnerIcon from '@/shared/assets/icons/spinner.svg';
import { Text } from '@/shared/components/Text';

import styles from './Button.module.css';
import Link from 'next/link';

export const Button: React.FC<ButtonProps> = ({
  size = DEFAULT_SIZE,
  icon,
  iconSide = DEFAULT_ICON_SIDE,
  fullWidth,
  className,
  children,
  ...props
}) => {
  const classes = clsx(styles.button, styles[size], fullWidth && styles.fullWidth, className);

  const content = (
    <>
      {icon && iconSide === 'start' && <span className={styles.icon}>{icon}</span>}
      <Text as='span' className={styles[`${size}Text`]}>
        {children}
      </Text>
      {icon && iconSide === 'end' && <span className={styles.icon}>{icon}</span>}
    </>
  );

  if (props.as === 'Link') {
    const { as, ...rest } = props;
    return (
      <Link className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (props.as === 'a') {
    const { as, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {content}
      </a>
    );
  }

  const { as, loading, disabled, ...rest } = props;
  return (
    <button className={classes} disabled={disabled || loading} aria-busy={loading} {...rest}>
      {icon && iconSide === 'start' && (
        <span className={clsx(styles.icon, { [styles.transparent]: loading })}>{icon}</span>
      )}
      <Text as='span' className={clsx(styles[`${size}Text`], { [styles.transparent]: loading })}>
        {children}
      </Text>
      {icon && iconSide === 'end' && (
        <span className={clsx(styles.icon, { [styles.transparent]: loading })}>{icon}</span>
      )}
      {loading && <SpinnerIcon aria-hidden className={styles.spinnet}></SpinnerIcon>}
    </button>
  );
};
