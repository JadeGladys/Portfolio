import React from 'react'
import { getImageUrl } from '../../utils'
import styles from '../Hero/Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heroCard}>
        <div className={styles.heroImageWrap}>
          <img
            className={styles.heroImg}
            src={getImageUrl("Hero/heroImage.png")}
            alt="Hero portrait"
          />
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Full-stack Developer</p>
          <h1 className={styles.title}>Hi, I'm Jade</h1>
          <p className={styles.description}>
            I build full-stack products with React, Nest, and Node.js, blending
            clean architecture with thoughtful UI. Completed a BSc in Software Engineering.
          </p>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>10+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>3</span>
              <span className={styles.statLabel}>Focus Areas</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>2024</span>
              <span className={styles.statLabel}>Grad Year</span>
            </div>
          </div>
          <div className={styles.ctaRow}>
            <a className={styles.contactBtn} href="mailto:jade.isimbi.b@gmail.com">
              Contact me
            </a>
            <a className={styles.secondaryBtn} href="#projects">
              View work
            </a>
          </div>
        </div>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
