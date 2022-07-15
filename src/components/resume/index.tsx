import "./index.scss";
import { Candidate } from "../../types/Candidate";

interface ResumeProps {
	candidate: Candidate;
}

const Resume = (props: ResumeProps) => {
	const {
		candidate: {
			name,
			location,
			email,
			phoneNumber,
			portfolioUrl,
			skillLists,
			previousJobs,
			personalProjects,
			degrees,
		},
	} = props;

	const skillSections = skillLists.map(({ category, skills }) => {
		const listItems = skills.map((skill) => {
			return <li key={skill}>{skill}</li>;
		});

		return (
			<section
				key={category}
				className="flexSection alignCenter"
			>
				<h4 className="secondaryHeader">{category}</h4>

				<div className="skillsContainer">
					<ul className="skillList">{listItems}</ul>
				</div>
			</section>
		);
	});

	return (
		<article>
			<header>
				<h1>{name}</h1>

				<ul className="contact-information">
					<li>
						<i className="fas fa-map-marker-alt"></i>
						<span>{location}</span>
					</li>
					<li>
						<i className="fas fa-envelope"></i>
						<span>{email}</span>
					</li>
					<li>
						<i className="fas fa-mobile-alt"></i>
						<span>{phoneNumber}</span>
					</li>
					<li>
						<i className="fas fa-laptop-code"></i>
						<span>{portfolioUrl}</span>
					</li>
				</ul>
			</header>

			<section
				id="skillSection"
				className="resumeSection"
			>
				<h2>Skills</h2>

				{skillSections}
			</section>

			<div className="separator"></div>

			<section
				id="workSection"
				className="resumeSection"
			>
				<h2>Work Experience</h2>

				<>
					{previousJobs.map(
						({
							jobTitle,
							datesWorked,
							company,
							companyAdditionalInfo,
							responsibilities,
						}) => {
							return (
								<section
									key={company}
									className="subSection"
								>
									<section className="flexSeparated">
										<h3 className="secondaryHeader">{jobTitle}</h3>
										<p>{datesWorked}</p>
									</section>

									<h4>
										{company}&nbsp;
										{companyAdditionalInfo && (
											<span>{companyAdditionalInfo}</span>
										)}
									</h4>

									<ul className="vertical-list">
										{responsibilities.map((responsibility, i) => (
											<li key={i}>{responsibility}</li>
										))}
									</ul>
								</section>
							);
						}
					)}
				</>
			</section>

			<div className="separator"></div>

			<section className="resumeSection">
				<h2>Personal Projects</h2>

				<>
					{personalProjects.map(({ name, datesActive, description }) => (
						<section
							key={name}
							className="subSection"
						>
							<section className="flexSeparated">
								<h3>{name}</h3>
								<p>{datesActive}</p>
							</section>

							<p>{description}</p>
						</section>
					))}
				</>
			</section>

			<div className="separator"></div>

			<section className="resumeSection">
				<h2>Education</h2>

				<>
					{degrees.map(({ name, datesAttended, schoolName }) => (
						<section
							key={name}
							className="subSection"
						>
							<section className="flexSeparated">
								<h3>{name}</h3>
								<p>{datesAttended}</p>
							</section>

							<p>{schoolName}</p>
						</section>
					))}
				</>
			</section>
		</article>
	);
};

export default Resume;
