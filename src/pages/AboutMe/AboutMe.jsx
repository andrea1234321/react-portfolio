import React from "react";
import styles from './AboutMe.module.css'

export default function AboutMe() {
  return (
    <div className={`container ${styles.aboutMeContainer}`}>
      <h1>Hi, I'm Andrea, </h1>
      <h2>a Full-Stack Software Engineer</h2>
      <h2>Specializing in Front-End development</h2>
    </div>
  );
}
