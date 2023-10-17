import React from 'react'
import styles from '../ProjectDetails/ProjectDetails.module.css'
import projects from '../../data/projects.json'
import { ProjectCardDetail } from './ProjectCardDetail'
import { getImageUrl } from '../../utils'
import { Link } from 'react-router-dom';

export const ProjectDetails = () => {
  return (
    <>
    <section className={styles.container}>
        <Link to="/home">
            <img className={styles.backImg} src={getImageUrl('Project/left-arrow.png')} alt='left arrow' />
        </Link>
        <h2 className={styles.title}>Projects In Detail</h2>
        <div className={styles.projects}>
            {projects.map((project, id) => {
            return <ProjectCardDetail key={id} project={project} />;
            })}
        </div>
    </section>    
    </>
  )
}


{/* <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section> */}
