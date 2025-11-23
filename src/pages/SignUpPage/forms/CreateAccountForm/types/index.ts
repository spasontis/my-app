import z from 'zod';
import { createAccountSchema } from '../model';

export type CreateAccountFields = z.infer<typeof createAccountSchema>;
