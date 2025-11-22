import { AccountFields, CodeFields, SignUpFields, NewAccountData } from '../types';

export const DEFAULT_SIGN_UP_VALUES: SignUpFields = {
  email: '',
};

export const DEFAULT_CODE_VALUES: CodeFields = {
  code: '',
};

export const DEFAULT_ACCOUNT_VALUES: AccountFields = {
  login: '',
  password: '',
  repeatPassword: '',
};

export const DEFAULT_NEW_ACCOUNT_DATA: NewAccountData = {
  login: '',
  email: '',
  password: '',
  code: '',
};
