import { useState } from 'react';
import styles from '@components/Header/Header.module.css';

export default function Header({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1 className="title">{title}</h1>
      <nav className={`${styles['navbar']}`}>
        <div className={`${styles['burger-menu']}`}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${styles['fancy-burger']}`}
          >
            {/* <span
              className={`${styles['box']} ${isOpen ? `${styles['open']}` : ''}`}
            ></span> */}
            <span
              className={`${styles['rectangle']} ${styles['rectangle--top']} ${
                styles['rectangle--small']
              } ${isOpen ? `${styles['open']}` : ''}`}
            ></span>
            <span
              className={`${styles['rectangle']} ${styles['rectangle--middle']} ${
                isOpen ? `${styles['open']}` : ''
              } `}
            ></span>
            <span
              className={`${styles['rectangle']} ${styles['rectangle--bottom']} ${
                styles['rectangle--small']
              } ${isOpen ? `${styles['open']}` : ''} `}
            ></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
