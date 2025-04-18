import React from 'react';
import { 
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle, } from "flowbite-react";


export default function Work() {
  const workExperience = [
    {
      date: "June 2024 - Present",
      title: 'Full-Stack Software Engineer',
      company: 'Deloitte',
      description: ''
    },
    {
      date: "March 2024 - Present",
      title: 'Java Developer Apprentice',
      company: 'Skillstorm',
      description: ''
    },
    {
      date: "July 2023 - September 2023",
      title: 'Web Developer',
      company: 'Freelance',
      description: ''
    },
    {
      date: "March 2023 - June 2023",
      title: 'Software Engineering Fellow',
      company: 'General Assembly',
      description: ''
    }
  ]
  return (
    <>
      <Timeline>
        {workExperience.map(experience => (
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>{experience.date}</TimelineTime>
                <TimelineTitle>{experience.title}</TimelineTitle>
                <TimelineBody>{experience.description}</TimelineBody>
              </TimelineContent>
            </TimelineItem>
        ))}
      </Timeline>
    </>
  )
}
