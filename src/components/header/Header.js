import React from 'react';
import styles from './Header.css';
import Drawer from '../drawer/Drawer';
import UserLogout from '../logout/UserLogout';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section className={styles.Header}>
      <Drawer />
      <Link to='/'>
        <h1>pindrop</h1>
      </Link>
      <UserLogout />
    </section>
  );
}

export default Header;
