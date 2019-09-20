import React from 'react';
import styles from './AboutUs.css';
import Header from '../header/Header';

function AboutUs() {
  return (
    <div>
      <Header />
      <section className={styles.AboutUs}>
        <h1>About Us</h1>
      </section>
      <section>
        <div>Eli</div>
        <div>Zach</div>
        <div>Erin</div>
      </section>
    </div>
  );
}

export default AboutUs;
