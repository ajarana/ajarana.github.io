import { render, screen } from "@testing-library/react";
import Resume from ".";
import { Candidate } from "../../types/Candidate";
import { deepFreeze } from "../../utils";

const candidate: Candidate = deepFreeze({
	name: "John Smith",
	location: "Canada",
	email: "johnsmith@email.com",
	phoneNumber: "703-444-4444",
	portfolioUrl: "A portfolio URL",
	github: "A github URL",
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

	const { name, skillLists, previousJobs, degrees } = candidate;

	const headingNames = [name, "Skills", "Work Experience", "Education"]
		.concat(skillLists.map(({ category }) => category))
		.concat(
			previousJobs.reduce((accum: string[], { jobTitle, company }) => {
				accum.push(jobTitle);
				accum.push(company);

				return accum;
			}, [])
		)
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
