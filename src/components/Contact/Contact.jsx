import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
          <div className={styles.text}>
            <h2>Contact</h2>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <img src={getImageUrl("Contact/emailIcon.png")} alt="Email icon" />
              <a href="mailto:gladysjade9@gmail.com">gladysjade9@gmail.com</a>
            </li>
            <li className={styles.link}>
              <img
                src={getImageUrl("Contact/linkedinIcon.png")}
                alt="LinkedIn icon"
              />
              <a href="https://www.linkedin.com/in/gladys-jade-isimbi-1ab7541bb/">linkedin.com/Jade</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("Contact/githubIcon.png")} alt="Github icon" />
              <a href="https://github.com/JadeGladys">github.com/Jade</a>
            </li>
          </ul>
        </footer>
  )
}
