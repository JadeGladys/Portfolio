import React, { useEffect, useState } from 'react'
import styles from '../Projects/ProjectCard.module.css'
import { getImageUrl } from '../../utils'

export const ProjectCard = ({
    project: { title, imageSrc, description, moredes, skills, links = [] },
    }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const skillsList = (
    <ul className={styles.skills}>
      {skills.map((skill, id) => {
        return (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        );
      })}
    </ul>
  );

  const linksList = links.length > 0 && (
    <div className={styles.links}>
      {links.map((link, id) => {
        return (
          <a key={id} href={link.url} className={styles.link}>
            {link.label}
          </a>
        );
      })}
    </div>
  );

  return (
    <>
      <div className={styles.container}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>
          {description}{' '}
          <button type="button" className={styles.moreBtn} onClick={() => setIsOpen(true)}>
            more
          </button>
        </p>
        {skillsList}
        {linksList}
      </div>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={getImageUrl(imageSrc)}
              alt={`Image of ${title}`}
              className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{moredes || description}</p>
            {skillsList}
            {linksList}
          </div>
        </div>
      )}
    </>
  )
}
