import { ComponentType, ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideProps } from 'lucide-react';

export type Tab = 'menu' | 'store' | 'library' | 'friends' | 'dailys';
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
  modal: boolean;
  icon: Icon;
}

export interface TabData<P = object> {
  id: string;
  modal: boolean;
  component: ComponentType<P>;
  icon: Icon;
  section: Section;
}

export interface ModalData {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export type SidebarProps = BaseSidebarProps;
