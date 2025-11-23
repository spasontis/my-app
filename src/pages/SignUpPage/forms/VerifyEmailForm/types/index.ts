import z from 'zod';
import { verifyEmailSchema } from '../model';

export type VerifyEmailFields = z.infer<typeof verifyEmailSchema>;
