import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src="/dev.png"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Sou um desenvolvedor frontend com experiência em construção responsiva
              e sites otimizados
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/cursorIcon.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                Eu projetei várias páginas de destino e criei um design
              sistemas também
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
