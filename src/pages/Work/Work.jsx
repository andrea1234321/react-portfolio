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
      description: [
        "Developed and maintained front-end features for a high-traffic government web application using React, JavaScript, and TypeScript",
        "Played a key role in the migration from JavaScript to TypeScript, becoming a go-to resource for best practices and onboarding teammates",
      ],
    },
    {
      date: "March 2024 - Present",
      title: "Java Developer Apprentice",
      company: "Skillstorm",
      description: [
        "Built full-stack web applications using Java, Spring Boot, React, TypeScript, and PostgreSQL, delivering scalable features across both front-end and back-end systems",
        "Deployed microservices using Docker, Kubernetes, and AWS, and strengthened cloud and Java expertise by earning AWS Cloud Practitioner and Java Foundations certifications",
      ],
    },
    {
      date: "July 2023 - September 2023",
      title: "Web Developer",
      company: "Freelance",
      description: [
        "Independently led the end-to-end design and development of a 7-page web application, completing the project two weeks ahead of schedule and exceeding client expectations",
        "Collaborated closely with the client to define scope and requirements, applying strong project planning, time management, and communication skills to ensure a smooth delivery process",
      ],
    },
    {
      date: "March 2023 - June 2023",
      title: "Software Engineering Fellow",
      company: "General Assembly",
      description: [
        "Completed immersive, hands-on training in software engineering with a focus on JavaScript and full-stack web development through real-world, project-based learning",
        "Gained practical experience with Git, GitHub workflow, and Agile methodologies, strengthening both technical and collaboration skills in a fast-paced team environment",
      ],
    },
  ];
  return (
    <div className={`container ${styles.workContainer}`}>
      <Timeline>
        {workExperience.map((experience) => (
          <TimelineItem key={experience.company}>
            <TimelinePoint />
            <TimelineContent className={styles.timelineContent}>
              <TimelineTime>{experience.date}</TimelineTime>
              <br />
              <TimelineTime>{experience.company}</TimelineTime>
              <TimelineTitle>{experience.title}</TimelineTitle>
              <TimelineBody>
                <ul>
                  {experience.description.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
