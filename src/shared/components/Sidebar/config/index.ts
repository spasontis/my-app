import {
  ClipboardList,
  Menu,
  ShoppingBasket,
  LayoutDashboard,
  BookMarked,
  Users,
} from 'lucide-react';
import { TabData } from '../types';

export const TABS: Record<string, TabData> = {
  menu: {
    id: 1,
    content: 'menu',
    icon: Menu,
    section: 'top',
  },
  store: { id: 2, content: 'store', icon: ShoppingBasket, section: 'top' },
  library: { id: 3, content: 'library', icon: LayoutDashboard, section: 'top' },
  task: { id: 4, content: 'task', icon: ClipboardList, section: 'top' },
  friends: { id: 5, content: 'friends', icon: Users, section: 'bottom' },
  dailys: { id: 6, content: 'dailys', icon: BookMarked, section: 'bottom' },
} as const;

export type Tab = keyof typeof TABS;
