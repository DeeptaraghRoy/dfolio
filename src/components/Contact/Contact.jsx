import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:roydeeptaragh@gmail.com">roydeeptaragh@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email icon" />
          <a
            href="https://www.linkedin.com/in/deeptaragh-roy-b42b7333/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/deeptaragh-roy-b42b7333/
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Email icon" />
          <a
            href="https://github.com/DeeptaraghRoy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/DeeptaraghRoy
          </a>
        </li>
      </ul>
    </footer>
  );
};
