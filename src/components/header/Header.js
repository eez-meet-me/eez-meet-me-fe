import React from 'react';
import styles from './Header.css';
import Drawer from '../drawer/Drawer';
import UserLogout from '../logout/UserLogout';

function Header() {
  return (
    <section className={styles.Header}>
      <Drawer />
      <h1>pindrop</h1>
      <UserLogout />
    </section>
  );
}

export default Header;
