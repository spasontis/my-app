export type ToastVariant = 'default' | 'success' | 'failed';

export interface ToastProps {
  variant?: ToastVariant;
  title: string;
  description?: string;
}
