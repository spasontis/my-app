'use client';

import { queryClient } from '@/shared/configs/queryClient';
import { ToastProvider, ToastViewport } from '@radix-ui/react-toast';
import { QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';

import styles from './ClientProviders.module.css';

export const ClientProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        {children} <ToastViewport className={styles.view_port} />
      </ToastProvider>
    </QueryClientProvider>
  );
};
