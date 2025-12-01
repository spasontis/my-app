import { Menu, ShoppingBasket, LayoutDashboard, Users, BookMarked } from 'lucide-react';
import dynamic from 'next/dynamic';
import { ModalData, Tab, TabData } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tabs: Record<string, TabData<any>> = {
  menu: {
    id: 'menu',
    modal: true,
    component: dynamic<ModalData>(() => import('@/features/Menu')),
    icon: Menu,
    section: 'top',
  },
  store: {
    id: 'store',
    modal: false,
    component: dynamic(() => import('@/features/Store')),
    icon: ShoppingBasket,
    section: 'top',
  },
  library: {
    id: 'library',
    modal: false,
    component: dynamic(() => import('@/features/Library')),
    icon: LayoutDashboard,
    section: 'top',
  },
  friends: {
    id: 'friends',
    modal: true,
    component: dynamic<ModalData>(() => import('@/features/Friends')),
    icon: Users,
    section: 'bottom',
  },
  dailys: {
    id: 'dailys',
    modal: true,
    component: dynamic<ModalData>(() => import('@/features/DailyChallenges')),
    icon: BookMarked,
    section: 'bottom',
  },
} as const;

export const top_controllers = Object.entries(tabs)
  .filter(([, v]) => v.section === 'top')
  .map(([id, v]) => ({ id: id as Tab, icon: v.icon, modal: v.modal }));

export const bottom_controllers = Object.entries(tabs)
  .filter(([, v]) => v.section === 'bottom')
  .map(([id, v]) => ({ id: id as Tab, icon: v.icon, modal: v.modal }));

export const tabComponents: Record<Tab, React.ComponentType> = {
  menu: tabs.menu.component,
  store: tabs.store.component,
  library: tabs.library.component,
  friends: tabs.friends.component,
  dailys: tabs.dailys.component,
};
