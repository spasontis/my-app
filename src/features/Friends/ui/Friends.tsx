import { X } from 'lucide-react';

import { ModalData } from '@/shared/components/Sidebar';
import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';

import styles from './Friends.module.css';

export const Friends = ({ isOpen, onClose }: ModalData) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Button variant='transparentWhite' size='xs' className={styles.close} onClick={onClose}>
          <X />
        </Button>
        <Text> Friends</Text>
      </div>
    </div>
  );
};
