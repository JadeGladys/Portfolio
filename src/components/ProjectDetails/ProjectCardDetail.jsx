import React from 'react'
import styles from '../ProjectDetails/ProjectCardDetail.module.css'
import { getImageUrl } from '../../utils'

export const ProjectCardDetail = ({
    project: { title, imageSrc, description, skills, moredes, demo, source },
    }) => {
    return (
        <div className={styles.container}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('About/cursorIcon.png')} alt='cursor icon' />
                    <div className={styles.aboutItemText}>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.description}>{moredes}</p>
                        <ul className={styles.skills}>
                            {skills.map((skill, id) => {
                            return (
                                <li key={id} className={styles.skill}>
                                {skill}
                                </li>
                            );
                            })}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

{/* <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('About/cursorIcon.png')} alt='cursor icon' />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a front-end developer with experience in 
                            building responsive websites and systems
                        </p>
                    </div>
                </li>
                </ul> */}
