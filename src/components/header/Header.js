import React from 'react';
import styles from './Header.css';
import Drawer from '../drawer/Drawer';

function Header() {
  return (
    <section className={styles.Header}>
      <Drawer />
      <h1>Pindrop</h1>
    </section>
  );
}

export default Header;
