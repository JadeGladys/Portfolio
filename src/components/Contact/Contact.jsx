import React from 'react'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.legals}>
          <h2>Legals</h2>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects I have worked on</a></li>
          </ul>
        </div>
        <div className={styles.blurb}>
          <p>
            Thanks for visiting my portfolio. If you’d like to collaborate or
            learn more about my work, reach out anytime through the links below.
          </p>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <p>©2025 All Rights Reserved. Jade Gladys</p>
        <div className={styles.iconLinks}>
          <a href="mailto:gladys.jade.isimbi@gmail.com" aria-label="Email">Email</a>
          <a href="https://www.linkedin.com/in/gladys-jade-isimbi-1ab7541bb/" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://github.com/JadeGladys" aria-label="GitHub">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
