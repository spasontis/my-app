import { useEffect } from 'react';

import { BRAND } from '@/shared/constants';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = BRAND;
    };
  }, [title]);
};
