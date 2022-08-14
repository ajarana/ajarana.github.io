import { Candidate } from "../../types/Candidate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLaptopCode,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

interface ResumeProps {
  candidate: Candidate;
  printMediaType?: boolean;
}

const Resume = (props: ResumeProps) => {
  const {
    candidate: {
      name,
      location,
      email,
      portfolioUrl,
      github,
      skillLists,
      previousJobs,
      degrees,
    },
    printMediaType = false,
  } = props;

  const skillSections = skillLists.map(({ category, skills }) => {
    const listItems = skills.map((skill) => {
      return <li key={skill}>{skill}</li>;
    });

    return (
      <section
        key={category}
        className={styles.skillGroup}
      >
        <h3>{category}</h3>

        <div className={styles.skillListContainer}>
          <ul className={styles.skillList}>{listItems}</ul>
        </div>
      </section>
    );
  });

  const resumeClassName = cx("resume", {
    printMediaType,
  });

  return (
    <article className={resumeClassName}>
      <header>
        <h1>{name}</h1>

        <ul className={styles.contactInformation}>
          <li>
            <FontAwesomeIcon icon={faLaptopCode} />
            <span>{portfolioUrl}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>{github}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>{email}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{location}</span>
          </li>
        </ul>
      </header>

      <section className={styles.resumeSection}>
        <h2>Skills</h2>

        {skillSections}
      </section>

      <section className={styles.resumeSection}>
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
