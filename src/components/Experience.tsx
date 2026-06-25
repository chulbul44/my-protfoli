"use client";

import React from "react";
import styles from "./Experience.module.css";

const experiences = [
  {
    role: "Frontend Architect / Developer",
    company: "Luxe E-Commerce Platform",
    period: "2026 - Present",
    description: "Designed and engineered 'Luxe', a premium high-end e-commerce platform. Implemented advanced checkout systems, user authentication flows, custom cart states, and highly optimized responsive interfaces.",
  },
  {
    role: "Full Stack Web Developer",
    company: "Coder Gali",
    period: "2025",
    description: "Designed and developed high-performance websites using Next.js, React, and modern frameworks. Worked on client projects focusing on clean, scalable code, SEO optimization, and fast delivery.",
  },
  {
    role: "Frontend Engineer",
    company: "Creative Web Studio",
    period: "2022 - 2024",
    description: "Designed and engineered interactive e-commerce and portfolio websites. Worked closely with design teams to translate Figma mockups into pixel-perfect, responsive React modules.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className={`${styles.experience} section`}>
      <div className={`${styles.container} container`}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>My Journey</span>
          <h2 className={styles.title}>Work Experience</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <span className={styles.period}>{exp.period}</span>
                <h3 className={styles.role}>{exp.role}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
