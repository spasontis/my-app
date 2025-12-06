import z from 'zod';
import { signInSchema } from '../model';

export type SignInFields = z.infer<typeof signInSchema>;
