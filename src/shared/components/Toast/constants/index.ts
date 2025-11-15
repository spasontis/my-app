import { Bell, CircleCheck, CircleX } from 'lucide-react';
import { FC, SVGProps } from 'react';

import { ToastVariant } from '../types';

export const VARIANT_ICONS: Record<ToastVariant, FC<SVGProps<SVGSVGElement>>> = {
  default: Bell,
  success: CircleCheck,
  failed: CircleX,
};

export const DEFAULT_VARIANT: ToastVariant = 'default';
