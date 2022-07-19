import { render, screen } from "@testing-library/react";
import Resume from ".";
import { Candidate } from "../../types/Candidate";
import { deepFreeze } from "../../utils";

const candidate: Candidate = deepFreeze({
	name: "John Smith",
	location: "Canada",
	email: "johnsmith@email.com",
	phoneNumber: "703-444-4444",
	portfolioUrl: "johnsmith.com/portfolio",
	skillLists: [
		{
			category: "Cooking",
			skills: ["Desserts", "Mexican", "Lebanese", "Korean"],
		},
		{
			category: "Managing",
			skills: ["Time"],
		},
	],
	previousJobs: [
		{
			jobTitle: "Executive Chef",
			datesWorked: "May 2016 - Present",
			company: "Michelin",
			responsibilities: ["Cooking delicious food."],
		},
	],
	personalProjects: [
		{
			name: "Cooking with Smith",
			datesActive: "Sept 2018 - Present",
			description: "Cooking live!",
		},
	],
	degrees: [
		{
			name: "Bachelor of Arts in Culinary Arts",
			datesAttended: "Sept 2013 - May 2016",
			schoolName: "Culinary Arts Academy Switzerland",
		},
	],
});

test("renders all headings", () => {
	render(<Resume candidate={candidate} />);

	const { name, skillLists, previousJobs, personalProjects, degrees } =
		candidate;

	const headingNames = [
		name,
		"Skills",
		"Work Experience",
		"Personal Projects",
		"Education",
	]
		.concat(skillLists.map(({ category }) => category))
		.concat(
			previousJobs.reduce((accum: string[], { jobTitle, company }) => {
				accum.push(jobTitle);
				accum.push(company);

				return accum;
			}, [])
		)
		.concat(personalProjects.map(({ name }) => name))
		.concat(degrees.map(({ name }) => name));

	headingNames.forEach((headingName) => {
		const headingElement = screen.getByRole("heading", {
			name: headingName,
		});

		expect(headingElement).toBeInTheDocument();
	});
});

test("renders all lists", () => {
	render(<Resume candidate={candidate} />);

	const verifyList = (list: string[]): void => {
		list.forEach((listItem) => {
			const listElement = screen.getByText(listItem);

			expect(listElement).toBeInTheDocument();
		});
	};

	candidate.skillLists.forEach(({ skills }) => {
		verifyList(skills);
	});

	candidate.previousJobs.forEach(({ responsibilities }) => {
		verifyList(responsibilities);
	});
});
