import { z } from 'zod';

export const twoFactorSchema = z.object({
  code: z.string().nonempty({ error: 'auth.placeholder.enterVerificationCode' }),
});
