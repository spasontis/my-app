import { z } from 'zod';

export const verifyEmailSchema = z.object({
  code: z
    .string()
    .nonempty({ error: 'auth.placeholder.enterCode' })
    .regex(/^\d+$/, { message: 'auth.text.codeNumber' }),
});
