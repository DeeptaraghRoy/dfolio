import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I am Deeptaragh Roy</h1>
        <p className={styles.description}>
          I am a React Frontend Developer with a year of Experience from
          Capgemini as a Fullstack &#40;Spring Boot &#43; React&#41; developer.
        </p>
        <a href="mailto:roydeeptaragh@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image of Myself"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
