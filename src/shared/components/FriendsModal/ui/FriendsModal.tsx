import { ModalData } from '../../Sidebar/types';
import styles from './FriendsModal.module.css';

export const FriendsModal = ({ isOpen, onClose }: ModalData) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        FriendsModal
      </div>
    </div>
  );
};
