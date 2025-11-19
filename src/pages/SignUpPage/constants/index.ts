import { EmailFields, CodeFields, SignUpFields, SignUpData } from '../types';

export const DEFAULT_EMAIL_VALUES: EmailFields = {
  email: '',
};

export const DEFAULT_CODE_VALUES: CodeFields = {
  code: '',
};

export const DEFAULT_SIGN_UP_VALUES: SignUpFields = {
  login: '',
  password: '',
  repeatPassword: '',
};

export const DEFAULT_SIGN_UP_DATA: SignUpData = {
  login: '',
  email: '',
  password: '',
  code: '',
};
