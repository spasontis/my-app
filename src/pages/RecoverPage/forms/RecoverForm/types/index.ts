import z from 'zod';
import { recoverSchema } from '../model';

export type RecoverFields = z.infer<typeof recoverSchema>;

export type EnterEmailFields = {
  email: string;
};
