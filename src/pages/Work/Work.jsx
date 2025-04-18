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
import { HiCalendar } from "react-icons/hi";

export default function Work() {
  const workExperience = [
    {
      date: "June 2024 - Present",
      title: "Full-Stack Software Engineer",
      company: "Deloitte",
      description: "lorem",
    },
    {
      date: "March 2024 - Present",
      title: "Java Developer Apprentice",
      company: "Skillstorm",
      description: "lorem",
    },
    {
      date: "July 2023 - September 2023",
      title: "Web Developer",
      company: "Freelance",
      description: "lorem",
    },
    {
      date: "March 2023 - June 2023",
      title: "Software Engineering Fellow",
      company: "General Assembly",
      description: "lorem",
    },
  ];
  return (
    <div className="container">
      <Timeline>
        {workExperience.map((experience) => (
          <TimelineItem>
            <TimelinePoint icon={HiCalendar} />
            <TimelineContent>
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
