import React from 'react'
import projects from '../../data/projects.json'
import styles from '../Projects/Projects.module.css'
import { ProjectCard } from './ProjectCard'


export const Projects = () => {
  const sections = [
    {
      key: 'backend',
      title: 'Back-end',
      description: 'APIs, services, and systems. GitHub links included.',
    },
    {
      key: 'fullstack',
      title: 'Full-stack',
      description: 'End-to-end builds with deployed demos and repos.',
    },
    {
      key: 'ui',
      title: 'UI',
      description: 'Design work and Figma case studies.',
    },
  ];

  return (
    <section className={styles.container} id="projects">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Projects</p>
          <h2 className={styles.title}>Selected Work</h2>
          <p className={styles.subtitle}>
            Curated projects across full-stack, back-end, and UI design.
          </p>
        </div>
        <div className={styles.totalCount}>
          {projects.length} projects
        </div>
      </div>
      <div className={styles.sections}>
        {sections.map((section) => {
          const sectionProjects = projects.filter(
            (project) => project.category === section.key
          );
          const textOnlyTitles = ['Checkmate', 'Smart Contract'];
          const textOnlyProjects = sectionProjects.filter((project) =>
            textOnlyTitles.includes(project.title)
          );
          const remainingProjects = sectionProjects.filter(
            (project) =>
              !textOnlyTitles.includes(project.title)
          );

          return (
            <div key={section.key} className={styles.section}>
              <div className={styles.sectionHeader}>
                <div>
                  <h3 className={styles.sectionTitle}>{section.title}</h3>
                  <p className={styles.sectionDescription}>{section.description}</p>
                </div>
                <span className={styles.sectionCount}>
                  {sectionProjects.length} items
                </span>
              </div>
              {sectionProjects.length > 0 ? (
                <>
                  {textOnlyProjects.length > 0 && (
                    <div className={styles.textOnlyList}>
                      {textOnlyProjects.map((project, id) => {
                        return (
                          <a
                            key={id}
                            className={styles.textOnlyItem}
                            href={(project.links && project.links[0] && project.links[0].url) || '#'}
                          >
                            <div className={styles.textOnlyBody}>
                              <h4>{project.title}</h4>
                              <p>{project.moredes || project.description}</p>
                            </div>
                            <span className={styles.textOnlyArrow}>View project</span>
                          </a>
                        );
                      })}
                    </div>
                  )}

                  {remainingProjects.length > 0 && (
                    <div className={styles.projects}>
                      {remainingProjects.map((project, id) => {
                        return <ProjectCard key={id} project={project} />;
                      })}
                    </div>
                  )}
                </>
              ) : (
                <div className={styles.emptyState}>
                  Add items for {section.title.toLowerCase()} in
                  <span className={styles.emptyStatePath}> `src/data/projects.json`</span>.
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  )
}
