import {
  Menu,
  ShoppingBasket,
  LayoutDashboard,
  ClipboardList,
  Users,
  BookMarked,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { Tab, TabData, ModalData } from '../types';

export const DEFAULT_TAB: Tab = 'library';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tabs: Record<string, TabData<any>> = {
  menu: {
    id: 1,
    modal: true,
    component: dynamic(() => import('@/shared/components/MenuModal')),
    icon: Menu,
    section: 'top',
  },
  store: {
    id: 2,
    modal: false,
    component: dynamic(() => import('@/pages/StorePage')),
    icon: ShoppingBasket,
    section: 'top',
  },
  library: {
    id: 3,
    modal: false,
    component: dynamic(() => import('@/pages/LibraryPage')),
    icon: LayoutDashboard,
    section: 'top',
  },
  task: {
    id: 4,
    modal: false,
    component: dynamic(() => import('@/pages/TaskPage')),
    icon: ClipboardList,
    section: 'top',
  },
  friends: {
    id: 5,
    modal: true,
    component: dynamic<ModalData>(() => import('@/shared/components/FriendsModal')),
    icon: Users,
    section: 'bottom',
  },
  dailys: {
    id: 6,
    modal: true,
    component: dynamic(() => import('@/shared/components/DailysModal')),
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
  task: tabs.task.component,
  friends: tabs.friends.component,
  dailys: tabs.dailys.component,
};
