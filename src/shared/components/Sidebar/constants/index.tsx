import { JSX } from 'react';
import { TABS } from '../config';
import { Tab } from '../types';

export const TOP_CONTROLLERS = Object.entries(TABS)
  .filter(([, v]) => v.section === 'top')
  .map(([id, v]) => ({ id: id as Tab, icon: v.icon }));

export const BOTTOM_CONTROLLERS = Object.entries(TABS)
  .filter(([, v]) => v.section === 'bottom')
  .map(([id, v]) => ({ id: id as Tab, icon: v.icon }));

export const tabContent = Object.fromEntries(
  Object.entries(TABS).map(([id, v]) => [id, <div key={v.id}>{v.content}</div>]),
) as Record<Tab, JSX.Element>;
