import React from 'react';
import styles from '../styles/ComingSoonModal.module.css';

const ComingSoonModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Coming Soon</h2>
        <p>App will launch on 01/07/2024. Stay tuned!</p>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

export default ComingSoonModal;
