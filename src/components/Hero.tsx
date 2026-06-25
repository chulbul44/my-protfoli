"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const titles = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Creative Engineer",
  "Problem Solver"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentTitle = titles[titleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText === currentTitle) {
          setIsDeleting(true);
          setTypingSpeed(1000); // Wait at the end of title
        } else {
          setTypingSpeed(75);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(300); // Wait before starting next title
        } else {
          setTypingSpeed(40);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);

  return (
    <section id="home" className={`${styles.hero} section`}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <span className={styles.greeting}>Hi there! I'm</span>
          <h1 className={styles.name}>Chulbul Kumari</h1>
          
          <div className={styles.typingContainer}>
            <span className={styles.staticText}>I am a </span>
            <span className={styles.dynamicText}>
              {displayText}
              <span className={styles.cursor}>|</span>
            </span>
          </div>

          <p className={styles.description}>
            I specialize in crafting high-performance web applications using modern technologies like Next.js, React, and Node. Let's turn your visionary concepts into exceptional digital realities.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
              Let's Talk
            </a>
            <a href="#projects" className={`${styles.btn} ${styles.btnSecondary}`}>
              View Work
            </a>
          </div>

          {/* Social Icons */}
          <div className={styles.socials}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <Image
              src="/hero_abstract.png"
              alt="Futuristic Abstract Concept Design"
              width={500}
              height={500}
              priority
              className={styles.heroImage}
            />
            <div className={styles.glowOverlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
