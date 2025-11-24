'use client';

import { toast as sonnerToast } from 'sonner';
import { ToastProps } from '../types';
import { Toast } from '../ui';

export function showToast(toast: Omit<ToastProps, 'id'>) {
  return sonnerToast.custom(() => <Toast title={toast.title} description={toast.description} />);
}
