import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const newLocal = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABDlBMVEX+AAD/AP8A/wH//wEB//8AAAAAAGz///8AAP7///z//56P/6MQ//UB/9la4FnjVeMYAPb/ANeJAKIAAGdtbX76+9Xl5fIkJG0AADnTWlpQ09MAmprU1FpRUdNa1FrTUdNQ01AAmgDUWtTTUFCaALucnP/19f+aAEEAACzKAHr+ADv/AOqbsJoi+SIA/0cB/+bY/2iamgBaWtP/9fX/nJwAALpRUVEAAEHU1NSaAJrU1IPU1Eya1JNh1Mpa1Lpa1ENm0WW+fb3UWr3TWkGVWpRQUDxRUcO5UHfYUEbTUL7aQ9qIs4fC02wAAExDQ8SZmenjnL7yi5OaAFGbAK9da10AmisAmouDmj5paYTw8NaUc0ZeAAABjElEQVR4nO3T11IUURRA0SYOWWVIShIQAxkM5KAEUUCEUcL//whVMFRNFw2neeBlWPsDbt91z+mkcFNzS12OWtvqg9pr4zpe1ES9SnLV+bKpsgQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYG5hlhClWBWSq3sjoQt7b+Jmhjcyhs6/to1I/t13naWUiVfCu3uzcY93N/LOrXcNTvg7dhQxvRq113uJoqaSj3MT2x7D6Fg5+YDFeoZmo63MSZ2Wifr5tL/wUwMDAwMDAwMDAwMM8Ls1ju6GtFf47HM/v7pbKTD3c7Lb27t9LyTf9Gwv6f9efpfD5VUrytsaKLy/eZfU7V01u8W+P99TU8cUnWV4td3YUc9fQ+cPOMU6sJU1WTgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgXl0V4xopevcC4+dAAAAAElFTkSuQmCC";
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
        src={newLocal}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
