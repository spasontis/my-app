import { z } from 'zod';

export const recoverSchema = z.object({
  email: z
    .email({ error: 'auth.text.emailInvalid' })
    .nonempty({ error: 'auth.placeholder.enterEmail' }),
});
