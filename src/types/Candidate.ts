interface SkillList {
	category: string;
	skills: string[];
}

interface Job {
	jobTitle: string;
	datesWorked: string;
	company: string;
	companyAdditionalInfo?: string;
	responsibilities: string[];
}

interface PersonalProject {
	name: string;
	datesActive: string;
	description: string;
}

interface AcademicDegree {
	name: string;
	datesAttended: string;
	schoolName: string;
}

export interface Candidate {
	name: string;
	location: string;
	email: string;
	portfolioUrl: string;
	skillLists: SkillList[];
	previousJobs: Job[];
	personalProjects: PersonalProject[];
	degrees: AcademicDegree[];
}
