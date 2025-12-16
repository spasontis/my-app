import { ModalData } from '@/widgets/Sidebar';

import { Text } from '@/shared/components/Text';

import styles from './Menu.module.css';

export const Menu = ({ isOpen, onClose }: ModalData) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Text> Menu</Text>
      </div>
    </div>
  );
};
