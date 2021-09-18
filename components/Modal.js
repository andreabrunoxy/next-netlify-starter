import { useState } from 'react';
import styles from '../styles/Modal.module.css';

export default function Modal({ show, onClose, title, children }) {
  // if (!show) {
  //   return null;
  // }

  return (
    <div className={show ? styles.modalOpen : styles.modalClose} onClick={onClose}>
      <div
        className={show ? styles.modalContentOpen : styles.modalContentClose}
        onClick={e => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>{title}</h4>
        </div>
        <div className={styles.modalBody}>{children}</div>
        <div className={styles.modalFooter}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
