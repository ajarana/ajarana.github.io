import {
  faAngleRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { repoKeys } from "../../api/ApiUtils";
import { getRepoByName } from "../../api/HomeAPI";
import { Project } from "../../types/Project";
import PortfolioExternalLink from "../external-link";
import PortfolioInternalLink from "../internal-link";
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
    <PortfolioExternalLink url={projectUrl}>
      <img
        className="images"
        src={asset.src}
        alt={asset.alt}
        srcSet={asset.srcset}
      />
    </PortfolioExternalLink>
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
                <PortfolioExternalLink
                  url={projectUrl}
                  icon={faArrowUpRightFromSquare}
                >
                  View project
                </PortfolioExternalLink>
              </li>
            )}

            <li>
              <PortfolioExternalLink
                url={codeUrl}
                icon={faArrowUpRightFromSquare}
              >
                View code
              </PortfolioExternalLink>
            </li>

            <li>
              <PortfolioInternalLink
                icon={faAngleRight}
                navLinkProps={{
                  to: blogPath,
                }}
              >
                Read more
              </PortfolioInternalLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
