import { ModalData } from '@/features/Sidebar';

import styles from './Menu.module.css';

export const Menu = ({ isOpen, onClose }: ModalData) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <h1>Menu</h1>
      </div>
    </div>
  );
};
