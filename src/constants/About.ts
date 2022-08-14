import { Candidate } from "../types/Candidate";
import { deepFreeze } from "../utils";

export const ANDRES_CANDIDATE_INFO: Candidate = deepFreeze({
  name: "Andres Arana",
  location: "Centreville, VA",
  email: "ajoelarana@gmail.com",
  portfolioUrl: "ajarana.github.io",
  github: "github.com/ajarana",
  skillLists: [
    {
      category: "Front End",
      skills: [
        "JavaScript",
        "CSS3",
        "HTML5",
        "React",
        "TypeScript",
        "Angular",
        "Sass",
        "Responsive Design",
        "Bootstrap",
        "Node",
        "Kendo UI",
        "Jasmine",
        "CesiumJS",
      ],
    },
    {
      category: "Software Tools",
      skills: [
        "macOS",
        "Ubuntu",
        "Git",
        "VS Code",
        "Jira",
        "Sentry",
        "CircleCI",
      ],
    },
    {
      category: "Languages",
      skills: ["English", "Spanish"],
    },
  ],
  previousJobs: [
    {
      jobTitle: "Senior Front-End Developer",
      datesWorked: "January 2021 - Present",
      company: "Ace Info Solutions",
      companyAdditionalInfo: "(acquired by Guidehouse in October, 2021)",
      responsibilities: [
        "Using Angular and Kendo UI to develop and update the core features of a user management application.",
        "Coordinating with a UI/UX team in order to bring consistency and extensibility to common components shared across different projects.",
        "Developed the front end for a minimally viable product using React and TypeScript.",
      ],
    },
    {
      jobTitle: "Front-End Developer",
      datesWorked: "April 2019 - December 2020",
      company: "LifeFuels",
      responsibilities: [
        "Coordinated the back-end and design changes necessary for front-end feature implementation with a small remote team.",
        "Built a dashboard using React for sports teams to manage the nutrition and hydration of players using the LifeFuels bottle.",
        "Built the first version of the lifefuels.com shop front end including cart, checkout, and subscription workflows using React.",
      ],
    },
    {
      jobTitle: "UI Developer",
      datesWorked: "September 2017 - April 2019",
      company: "Pragmatics",
      responsibilities: [
        "Visualized real-time geospatial and weather data for a federal client using CesiumJS.",
        "Made incremental improvements to the design and front-end stack of an existing web-based dashboard.",
      ],
    },
  ],
  personalProjects: [
    {
      name: "ajarana.github.io",
      datesActive: "December 2016 - Present",
      description: "Portfolio website that I designed and developed.",
    },
  ],
  degrees: [
    {
      name: "Bachelor of Science in Chemistry",
      datesAttended: "August 2012 - May 2016",
      schoolName: "College of William & Mary",
    },
  ],
});
