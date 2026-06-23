import React, { useState } from 'react'
import projects from '../../data/projects.json'
import styles from '../Projects/Projects.module.css'
import { ProjectCard } from './ProjectCard'

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

const textOnlyTitles = ['Checkmate', 'Smart Contract'];

export const Projects = () => {
  const [activeKey, setActiveKey] = useState(sections[0].key);
  const activeSection = sections.find((section) => section.key === activeKey);

  const sectionProjects = projects.filter(
    (project) => project.category === activeKey
  );
  const textOnlyProjects = sectionProjects.filter((project) =>
    textOnlyTitles.includes(project.title)
  );
  const remainingProjects = sectionProjects.filter(
    (project) => !textOnlyTitles.includes(project.title)
  );

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

      <div className={styles.tabs} role="tablist">
        {sections.map((section) => {
          const count = projects.filter((project) => project.category === section.key).length;
          return (
            <button
              key={section.key}
              type="button"
              role="tab"
              aria-selected={activeKey === section.key}
              className={`${styles.tab} ${activeKey === section.key ? styles.tabActive : ''}`}
              onClick={() => setActiveKey(section.key)}
            >
              {section.title}
              <span className={styles.tabCount}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h3 className={styles.sectionTitle}>{activeSection.title}</h3>
            <p className={styles.sectionDescription}>{activeSection.description}</p>
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
            Add items for {activeSection.title.toLowerCase()} in
            <span className={styles.emptyStatePath}> `src/data/projects.json`</span>.
          </div>
        )}
      </div>
    </section>
  )
}
