import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { StepperProps } from '../types';
import clsx from 'clsx';

import styles from './Stepper.module.css';

export const Stepper: FC<StepperProps> = ({ steps, current, incomplete, className }) => {
  const t = useTranslations('translation');
  const lastPassed = current - 1;

  return (
    <div className={clsx(styles.wrapper, className)}>
      {Array.from({ length: steps }, (_, i) => {
        const isIncomplete = incomplete && i === lastPassed;
        const isPassed = i < current && !isIncomplete;

        return (
          <div key={i} className={clsx(styles.step)}>
            <div
              className={clsx(
                styles.fill,
                isPassed && styles.passed,
                isIncomplete && styles.incomplete,
              )}
            >
              <span className='hidden'>
                {t('shared.text.progress', { current: i + 1, total: steps })}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
