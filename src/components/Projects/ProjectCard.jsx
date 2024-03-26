import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{description}</p>
        </div>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          <a href={demo} className={styles.link}>
            Demo
          </a>
          <a href={source} className={styles.link}>
            Source
          </a>
        </div>
      </div>
    </div>
  );
};
