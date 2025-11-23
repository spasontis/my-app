import { z } from 'zod';

export const verifyEmailSchema = z.object({
  code: z.string().nonempty({ error: 'auth.placeholder.enterCode' }),
});
