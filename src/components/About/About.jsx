import React from 'react'
import { getImageUrl } from '../../utils'
import styles from '../About/About.module.css'

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("About/aboutImage.png")} alt='About Image of me' />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('About/cursorIcon.png')} alt='cursor icon' />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a front-end developer with experience in 
                            building responsive websites and systems
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl('About/serverIcon.png')} alt='server icon' />
                    <div className={styles.aboutItemText}>
                        <h3>Backendend Developer</h3>
                        <p>I have experience developing fast and optimised
                            back-end systems and APIs
                        </p>
                    </div>    
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl('About/uiIcon.png')} alt='ui icon' />
                    <div className={styles.aboutItemText}>    
                        <h3>UI Developer</h3>
                        <p>I have designed multiple landing pages and have 
                            created design systems as well
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
