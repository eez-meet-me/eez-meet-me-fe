import React from 'react';
import styles from './AboutUs.css';
import Header from '../header/Header';

function AboutUs() {
  return (
    <div className={styles.AboutUs}>
      <Header />
      <section>
        <h1>About Us</h1>
      </section>
      <div className={styles.us}>
        <section>
          <h3 className={styles.text}>Eli</h3>
          <img className={styles.Eli}src='./assets/eli.png'></img>
          <p>Eli is a lil gremlin who likes kayaking and coding. He obsesses about his hair and walks really fast. When he gets excited, his eyes get big and so does his voice.</p>
          <section className={styles.Links}>
            <a href='https://www.linkedin.com/in/eli-nicholson/'>LinkedIn</a>
            <a href='https://www.linkedin.com/in/eli-nicholson/'>GitHub</a>
          </section>
        </section>
        <section>
          <h3>Zach</h3>
          <img className={styles.Zach}src='./assets/zach.png'></img>
          <p>Zach is a big nerd who loves things like Magic the Gathering and snowboarding. He is a great coder, but he is scared of public speaking. So just let him smile and smile back.</p>
          <section className={styles.Links}>
            <a href='https://github.com/zach-ryan-butler'>LinkedIn</a>
            <a href='https://www.linkedin.com/in/zach-ryan-butler/'>GitHub</a>
          </section>

        </section>
        <section>
          <h3>Erin</h3>
          <img className={styles.Erin} src='./assets/erin.png'></img>
          <p>Erin is the coolest thing since shoestrings and a looker to boot. She might be tiny but packs and punch, tons of creative gusto. A former teacher, she knows how to whip things into shape. And as a midnight poet, she can charm an icicle.</p>
          <section className={styles.Links}>
            <a href='https://www.linkedin.com/in/erin-gurley/'>LinkedIn</a>
            <a href='https://github.com/eringurley'>GitHub</a>
          </section>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
