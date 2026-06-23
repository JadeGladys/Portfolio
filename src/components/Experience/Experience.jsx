import React from 'react'

import styles from './Experience.module.css'
import skills from '../../data/skills.json'
import { getImageUrl } from '../../utils'

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.headerRow}>
        <div>
          <p className={styles.eyebrow}>Experience</p>
          <h2 className={styles.title}>Selected Experience</h2>
          <p className={styles.subtitle}>
            Focused on shipping production work, clean architecture, and usable UI.
          </p>
        </div>
        <div className={styles.metrics}>
          <div className={styles.metric}>
            <span className={styles.metricValue}>{skills.length}</span>
            <span className={styles.metricLabel}>Skills</span>
          </div>
        </div>
      </div>

      <div className={styles.floatingStage}>
        {skills.map((skill, id) => {
          return (
            <div key={id} className={styles.floatingIcon}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              <span>{skill.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
