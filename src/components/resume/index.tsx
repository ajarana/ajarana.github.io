import { Candidate } from "../../types/Candidate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faLaptopCode,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const styles = require("./index.module.scss").default;

interface ResumeProps {
	candidate: Candidate;
}

const Resume = (props: ResumeProps) => {
	const {
		candidate: {
			name,
			location,
			email,
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
				className={styles.skillsGroup}
			>
				<h3>{category}</h3>

				<div className={styles.skillsListContainer}>
					<ul className={styles.skillList}>{listItems}</ul>
				</div>
			</section>
		);
	});

	return (
		<article className={styles.resume}>
			<header>
				<h1>{name}</h1>

				<ul className={styles.contactInformation}>
					<li>
						<FontAwesomeIcon icon={faLocationDot} />
						<span>{location}</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faEnvelope} />
						<span>{email}</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faLaptopCode} />
						<span>{portfolioUrl}</span>
					</li>
				</ul>
			</header>

			<section
				id={styles.skillSection}
				className={styles.resumeSection}
			>
				<h2>Skills</h2>

				{skillSections}
			</section>

			<div className={styles.separator}></div>

			<section
				id={styles.workSection}
				className={styles.resumeSection}
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
									className={styles.accomplishment}
								>
									<section className={styles.accomplishmentHeader}>
										<h3>{jobTitle}</h3>
										<p>{datesWorked}</p>
									</section>

									<h4>
										{company}&nbsp;
										{companyAdditionalInfo && (
											<span>{companyAdditionalInfo}</span>
										)}
									</h4>

									<ul className={styles.verticalList}>
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

			<div className={styles.separator}></div>

			<section className={styles.resumeSection}>
				<h2>Personal Projects</h2>

				<>
					{personalProjects.map(({ name, datesActive, description }) => (
						<section
							key={name}
							className={styles.accomplishment}
						>
							<section className={styles.accomplishmentHeader}>
								<h3>{name}</h3>
								<p>{datesActive}</p>
							</section>

							<p>{description}</p>
						</section>
					))}
				</>
			</section>

			<div className={styles.separator}></div>

			<section className={styles.resumeSection}>
				<h2>Education</h2>

				<>
					{degrees.map(({ name, datesAttended, schoolName }) => (
						<section
							key={name}
							className={styles.accomplishment}
						>
							<section className={styles.accomplishmentHeader}>
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
