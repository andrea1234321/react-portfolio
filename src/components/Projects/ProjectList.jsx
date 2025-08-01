import React, { useState } from "react";
import { Button, Pagination } from "flowbite-react";
import styles from "./ProjectList.module.css";

export default function ProjectList() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const projects = [
    {
      name: "Midnight Inventory Management",
      description:
        "An inventory management app that enables efficient tracking and editing of inventory across multiple warehouses, simulating real-world operational needs.",
      frontEnd: ["JavaScript", "HTML", "CSS"],
      backEnd: ["Java", "Spring", "PostgreSQL"],
      githubLink:
        "https://github.com/andrea1234321/inventory-management-front-end",
    },
    {
      name: "Express Tax",
      description:
        "A full-stack tax filing application that streamlines the management of personal tax information. Includes full CRUD functionality, as well as accessibility settings that allow users to switch between English and Spanish.",
      frontEnd: ["TypeScript", "HTML", "CSS"],
      backEnd: ["Java", "Spring", "PostgreSQL"],
      githubLink: "https://github.com/andrea1234321/tax-prep-app-frontend",
    },
    {
      name: "HealthPal",
      description:
        'A react application built for a hackathon that leverages the OpenAI API to deliver personalized medical recommendations based on user inputs. This project won the Best Web Development category.',
      frontEnd: ["JavaScript", "HTML", "CSS"],
      backEnd: ["React", "MongoDb", "Express", "Node", "OpenAI"],
      githubLink: "https://github.com/andrea1234321/healthPal-front-end",
      webLink: "https://health-pal.netlify.app/",
    },
    {
      name: "BAMM Voyage",
      description:
        "A MERN stack travel planning application designed to simplify trip organization by helping users plan, manage, and track their travel itineraries in one place.",
      frontEnd: ["JavaScript", "HTML", "CSS"],
      backEnd: ["React", "MongoDb", "Express", "Node"],
      githubLink: "https://github.com/CurrentlyBob/bamm-voyage-front-end",
      webLink: "https://bamm-voyage.netlify.app/",
    },
    {
      name: "LevelUp",
      description: `A MEN stack app to help users organize their lives by creating detailed goals and tracking progress. The app also supports identifying and breaking bad habits, offering a comprehensive tool for personal growth and productivity.`,
      frontEnd: ["JavaScript", "HTML", "CSS"],
      backEnd: ["MongoDb", "Express", "Node"],
      githubLink: "https://github.com/andrea1234321/healthPal-front-end",
    },
    {
      name: "BlackJack",
      description: `A vintage Vegas-themed Blackjack game that incorporates essential game mechanics including doubling down and accurate ace value logic, delivering an engaging and authentic casino experience.`,
      frontEnd: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/andrea1234321/BlackJack",
      webLink: "https://andrea-blackjack.netlify.app/",
    },
    {
      name: "Showcase",
      description: `An application to manage a users favorite shows as a dedicated effort to build proficiency in Python and Django. The project features full CRUD functionalities and demonstrates practical experience in building web applications with these technologies.`,
      frontEnd: ["Python", "HTML", "CSS"],
      backEnd: ["PostgreSQL", "Django"],
      githubLink: "https://github.com/andrea1234321/showcase",
    },
  ];

  const techBadges = {
    JavaScript: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    HTML: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    CSS: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    TypeScript: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    React: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    MongoDb: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    Express: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    Node: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    Python: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    Django: "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
    PostgreSQL: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
    Spring: "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white",
    Java: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
    OpenAI: "https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white",
  };

  // Calculate the projects to display for the current page
  const itemsPerPage = 2;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProjects = projects.slice(startIndex, endIndex);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  return (
    <>
      {paginatedProjects.map((project) => (
        <div className={styles.projectCard} key={project.name}>
          <div className={styles.picture}>picture</div>
          <div className={styles.description}>
            <h1>{project.name}</h1>
            <div className={styles.badges}>
              {project.frontEnd.map((tech, index) => (
                <img
                  src={techBadges[tech]}
                  alt={`${tech} badge`}
                  key={`frontend-${index}`}
                ></img>
              ))}
              {project.backEnd &&
                project.backEnd.map((tech, index) => (
                  <img
                    src={techBadges[tech]}
                    alt={`${tech} badge`}
                    key={`backend-${index}`}
                  ></img>
                ))}
            </div>
            <h2>{project.description}</h2>
            <div className={styles.links}>
              <Button href={project.githubLink} target="_blank">
                GitHub
              </Button>
              {project.webLink && (
                <Button href={project.webLink} target="_blank">
                  Website
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={projects.length}
          totalPages={totalPages}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </>
  );
}
