import { z } from 'zod';

export const twoFactorSchema = z.object({
  token: z.string().nonempty({ error: 'auth.placeholder.enterVerificationCode' }),
});
