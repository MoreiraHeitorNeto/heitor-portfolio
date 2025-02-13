import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projetos</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
      <a href="https://github.com/MoreiraHeitorNeto" target="_blank" rel="noopener noreferrer" className={styles.githubButton}> Acesse todos os projetos no GitHub </a>
    </section>
  );
};
