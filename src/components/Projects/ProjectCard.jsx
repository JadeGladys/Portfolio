import React from 'react'
import styles from '../Projects/ProjectCard.module.css'
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils'

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, links = [] },
    }) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>
        {description}
        <Link to="/details"> more</Link>
      </p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      {links.length > 0 && (
        <div className={styles.links}>
          {links.map((link, id) => {
            return (
              <a key={id} href={link.url} className={styles.link}>
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  )
}
