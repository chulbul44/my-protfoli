"use client";

import React from "react";
import styles from "./About.module.css";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 / CSS3 / SCSS", level: 90 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "MongoDB / Mongoose", level: 80 },
      { name: "PostgreSQL / SQL", level: 75 },
      { name: "RESTful APIs / GraphQL", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker / Containers", level: 70 },
      { name: "Webpack / Vite / npm", level: 80 },
      { name: "VS Code / Linux CLI", level: 85 },
    ],
  },
];

export default function About() {
  return (
    <section id="about" className={`${styles.about} section`}>
      <div className={`${styles.container} container`}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Get To Know Me</span>
          <h2 className={styles.title}>About Me & Skills</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.bio}>
            <p>
              I am a passionate <strong>Full Stack Web Developer</strong> with a strong focus on building responsive, highly performant, and visually stunning web applications. I love bridges between design and technical implementation, always striving to deliver seamless user experiences.
            </p>
            <p>
              My journey in software engineering started out of sheer curiosity about how web interfaces function. Over the years, that curiosity evolved into a professional career building production-ready applications for clients worldwide.
            </p>
            <p>
              I prioritize clean code, logical structure, and robust architecture. When I'm not coding, I'm usually researching the latest developments in tech or brainstorming new creative projects.
            </p>
          </div>

          <div className={styles.skillsContainer}>
            {skillCategories.map((category, index) => (
              <div key={index} className={styles.skillCard}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className={styles.skillItem}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div
                          className={styles.progress}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
