import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { INITIAL_STATE, DEVTOOLS_NAME, STORAGE_NAME } from '../constants';
import { AppState } from '../types';

export const useAppStore = create<AppState>()(
  persist(
    devtools(() => INITIAL_STATE, { name: DEVTOOLS_NAME }),
    { name: STORAGE_NAME },
  ),
);
