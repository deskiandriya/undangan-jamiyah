import React from 'react';
import styles from '../styles/AnimatedBackground.module.css';

const AnimatedBackground = () => {
  return (
    <div className={styles.background}>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default AnimatedBackground;
