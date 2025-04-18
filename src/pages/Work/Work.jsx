import React from "react";
import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import styles from "./Work.module.css";

export default function Work() {
  const workExperience = [
    {
      date: "June 2024 - Present",
      title: "Full-Stack Software Engineer",
      company: "Deloitte",
      description:
        "I focused on front-end development for a confidential government web application, building accessible, user-friendly interfaces using React, JavaScript, and TypeScript. I played a key role in the UI enhancement and accessibility improvements, and helped lead the successful migration from JavaScript to TypeScript, providing guidance and support to teammates to ensure a smooth and consistent transition.",
    },
    {
      date: "March 2024 - Present",
      title: "Java Developer Apprentice",
      company: "Skillstorm",
      description: "I developed full-stack web applications using Java, Spring Boot, React, TypeScript, and PostgreSQL, contributing to projects such as a personal finance manager, tax preparation tool, and inventory management system. My work included designing UI layouts, implementing backend logic, and deploying microservices with Docker, Kubernetes, and AWS. In addition to hands-on development, I further enhanced my technical expertise by earning the AWS Cloud Practitioner and Java Foundations certifications.",
    },
    {
      date: "July 2023 - September 2023",
      title: "Web Developer",
      company: "Freelance",
      description: "I independently led the design and development of a 7-page web application, delivering the project two weeks ahead of schedule. I managed the full development lifecycle, from initial scoping and wireframing to deployment, demonstrating ownership, technical versatility, and attention to detail. Throughout the project, I applied strong project planning, time management, and client communication skills, ensuring the application met all requirements and exceeded expectations.",
    },
    {
      date: "March 2023 - June 2023",
      title: "Software Engineering Fellow",
      company: "General Assembly",
      description: "Completed hands-on training in software engineering, with a focus on JavaScript and full-stack web development. Gained practical experience using Git version control, GitHub workflow, and agile development methodologies, while sharpening technical skills and strengthening team collaboration in a fast-paced, project-based environment.",
    },
  ];
  return (
    <div className={`container ${styles.workContainer}`}>
      <Timeline>
        {workExperience.map((experience) => (
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent className={styles.timelineContent}>
              <TimelineTime>{experience.date}</TimelineTime>
              <br />
              <TimelineTime>{experience.company}</TimelineTime>
              <TimelineTitle>{experience.title}</TimelineTitle>
              <TimelineBody>{experience.description}</TimelineBody>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
