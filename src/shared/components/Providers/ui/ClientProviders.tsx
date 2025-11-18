'use client';

import { FC, ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from '@radix-ui/react-toast';
import { ToastViewport } from '@radix-ui/react-toast';

import { queryClient } from '@/shared/configs/queryClient';

import styles from './Providers.module.css';

export const ClientProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <ToastViewport className={styles.view_port} />
        {children}
      </ToastProvider>
    </QueryClientProvider>
  );
};
