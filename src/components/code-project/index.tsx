import {
  faAngleRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { repoKeys } from "../../api/ApiUtils";
import { getRepoByName } from "../../api/HomeAPI";
import { Project } from "../../types/Project";
import ExternalLink from "../external-link";
import "./index.scss";

interface CodeProjectProps {
  project: Project;
}

export const CodeProject = (props: CodeProjectProps) => {
  const { project } = props;

  const {
    asset,
    blogPath,
    description,
    warning,
    title,
    projectUrl,
    codeUrl,
    repoName,
  } = project;

  const { isLoading, isError, data } = useQuery(repoKeys.repo(repoName), () =>
    getRepoByName(repoName)
  );

  const image = projectUrl ? (
    <ExternalLink href={projectUrl}>
      <img
        className="images"
        src={asset.src}
        alt={asset.alt}
        srcSet={asset.srcset}
      />
    </ExternalLink>
  ) : (
    <img
      className="images"
      src={asset.src}
      alt={asset.alt}
      srcSet={asset.srcset}
    />
  );

  return (
    <section className="sectionContainer">
      <div className="project flexCenteredToFlexTopLeft flexWrapThenNoWrap invisible">
        <figure className="imageHolder flexCentered">{image}</figure>

        <div className="listContainer">
          <header>
            <h3 className="sectionHeaders">
              {title}{" "}
              {!isError && !isLoading && (
                <span className="updated-time">
                  Created:{" "}
                  {moment(data.created_at).format("MMMM Do YYYY, h:mm:ss a")}
                </span>
              )}
            </h3>

            <p>{description}</p>

            <p className="project-warning codeRed">{warning}</p>
          </header>

          <ul className="linkContainer">
            {projectUrl && (
              <li>
                <ExternalLink href={projectUrl}>
                  View project
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </ExternalLink>
              </li>
            )}

            <li>
              <ExternalLink href={codeUrl}>
                View code
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </ExternalLink>
            </li>

            <li>
              <NavLink to={blogPath}>
                Read more
                <FontAwesomeIcon icon={faAngleRight} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
