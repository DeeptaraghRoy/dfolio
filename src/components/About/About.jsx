import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/qualificationIcon.png")}
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Qualifications</h3>
              <p>UG : BCA from Techno India, Kolkata</p>
              <p>PG : MCA from Narula Institute of Technology</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/certificationIcon.png")}
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3>
              <p>
                1. Udemy : Modern HTML &amp; CSS From The Beginning
                &#40;Including Sass&#41;
              </p>
              <p>
                2. Udemy : The Complete JavaScript Course 2024: From Zero to
                Expert!
              </p>
              <p>
                3. Udemy : React - The Complete Guide 2024 &#40;incl. React
                Router &amp; Redux&#41;
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
