import React from 'react'
import { getImageUrl } from '../../utils'
import styles from '../About/About.module.css'

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <div className={styles.header}>
          <p className={styles.eyebrow}>About</p>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>
            A quick look at how I work across the front-end, back-end, and UI.
          </p>
        </div>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("About/aboutImage.png")} alt='About Image of me' />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('About/cursorIcon.png')} alt='cursor icon' />
                    <div className={styles.aboutItemText}>
                        <h3>Front-end Developer</h3>
                        <p>I build accessible, responsive interfaces with React
                            and modern CSS, focused on performance and polish.
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl('About/serverIcon.png')} alt='server icon' />
                    <div className={styles.aboutItemText}>
                        <h3>Back-end Developer</h3>
                        <p>I design reliable APIs and services with clean data
                            models, authentication, and scalable architecture.
                        </p>
                    </div>    
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl('About/uiIcon.png')} alt='ui icon' />
                    <div className={styles.aboutItemText}>    
                        <h3>UI Developer</h3>
                        <p>I translate ideas into UI/UX through wireframes,
                            prototypes, and reusable design systems.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
