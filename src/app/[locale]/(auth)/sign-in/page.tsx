'use client';

import { SignInPage } from '@/pages/SignInPage';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/configs/queryClient';
export default function SignIn() {
  return (
    <QueryClientProvider client={queryClient}>
      <SignInPage />
    </QueryClientProvider>
  );
}
