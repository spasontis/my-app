export type Tab = 'menu' | 'task' | 'workspace' | 'account' | 'settings';

interface BaseSidebarProps {
  activeTab?: Tab;
}

export type SidebarProps = BaseSidebarProps;
