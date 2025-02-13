import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, Eu sou o Heitor</h1>
        <p className={styles.description}>
        Olá! Sou um desenvolvedor frontend apaixonado por tecnologia e sempre em busca de novos desafios. Adoro transformar ideias em interfaces intuitivas e funcionais, criando experiências digitais envolventes.

Minha jornada na programação começou com a curiosidade de entender como os sites e aplicativos funcionam, e desde então, venho aprimorando minhas habilidades em tecnologias como HTML, CSS, JavaScript e frameworks modernos. Além do desenvolvimento, sou um entusiasta do aprendizado contínuo e estou sempre estudando novas ferramentas e tendências para entregar soluções cada vez melhores.

Estou em busca de uma oportunidade para aplicar meu conhecimento, crescer profissionalmente e contribuir para projetos inovadores. Se você procura um desenvolvedor comprometido e apaixonado pelo que faz, entre em contato comigo!
        </p>
        <a href="mailto:heitor.moreira.neto@outlook.com" className={styles.contactBtn}>
          Entre em contato
        </a>
      </div>
      <img
        src={"./assets/download.jpeg"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
