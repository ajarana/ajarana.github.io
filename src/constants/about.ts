import { Candidate } from "../types/Candidate";
import { deepFreeze } from "../utils";

export const ANDRES_CANDIDATE_INFO: Candidate = deepFreeze({
	name: "Andres Arana",
	location: "Centreville, VA",
	email: "ajoelarana@gmail.com",
	portfolioUrl: "ajarana.github.io",
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
				"Responsive Design",
				"Sass",
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
				"Developed the frontend for a minimally viable product using React and TypeScript.",
			],
		},
		{
			jobTitle: "Front-End Developer",
			datesWorked: "April 2019 - December 2020",
			company: "LifeFuels",
			responsibilities: [
				"Project lead for a small remote team in charge of coordinating the project's various back-end, front-end, and design needs.",
				"Building the React-based dashboard front end for sports teams to manage the nutrition and hydration of players using the LifeFuels bottle.",
				"Built the majority of the lifefuels.com shop front end including cart, checkout, and subscription workflows using React.",
			],
		},
		{
			jobTitle: "UI Developer",
			datesWorked: "September 2017 - April 2019",
			company: "Pragmatics",
			responsibilities: [
				"Visualized real-time geospatial and weather data using CesiumJS for a prototype created for a federal customer.",
				"Developed the front end for other web prototypes using React and Vis.js.",
				"Involved in interviewing candidates and mentored new team members to help them use React and AngularJS to support existing projects.",
				"Attended customer meetings to provide feature status updates and gather feedback.",
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
