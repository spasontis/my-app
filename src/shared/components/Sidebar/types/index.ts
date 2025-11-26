import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideProps } from 'lucide-react';

export type Tab = 'menu' | 'store' | 'library' | 'task' | 'friends' | 'dailys';
export type Section = 'top' | 'bottom';
export type Icon = ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
>;

export interface BaseSidebarProps {
  activeTab?: Tab;
  onChange?: (tab: Tab) => void;
}

export interface ControllerData {
  id: Tab;
  icon: Icon;
}

export interface TabData {
  id: number;
  content: string;
  icon: Icon;
  section: Section;
}

export type SidebarProps = BaseSidebarProps;
