import dynamic from 'next/dynamic';
import type React from 'react';
import { Menu, ShoppingBasket, LayoutDashboard, Users, BookMarked } from 'lucide-react';
import { ModalData, Tab, TabData } from '../types';

// связь: таб → тип пропсов компонента
type TabProps = {
  menu: ModalData;
  friends: ModalData;
  dailys: ModalData;
  store: void;
  library: void;
};

// типизируем через satisfies (не даёт “расползтись” типам)
export const tabs = {
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
} satisfies Record<Tab, TabData<TabProps[Tab]>>;

// остальное работает как и раньше
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
