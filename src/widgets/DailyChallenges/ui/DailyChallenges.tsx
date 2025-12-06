import { X } from 'lucide-react';

import { ModalData } from '@/shared/components/Sidebar';
import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';

import styles from './DailyChallenges.module.css';

export const DailyChallenges = ({ isOpen, onClose }: ModalData) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Button className={styles.close} onClick={onClose}>
          <X />
        </Button>
        <Text>DailyChallenges</Text>
      </div>
    </div>
  );
};
