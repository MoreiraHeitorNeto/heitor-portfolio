import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contato</h2>
        <p>Sinta-se à vontade para entrar em contato!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="./emailIcon.png" alt="Email icon" />
          <a href="mailto:heitor.moreira.neto@outlook.com">heitor.moreira.neto@outlook.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/heitor-moreira-0983a9173/">linkedin.com/HeitorMoreira</a>
        </li>
        <li className={styles.link}>
          <img src="/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/MoreiraHeitorNeto">github.com/MoreiraHeitorNeto</a>
        </li>
      </ul>
    </footer>
  );
};
