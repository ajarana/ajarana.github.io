import moment from "moment";
import "./index.scss";
import { useQuery } from "@tanstack/react-query";
import { getRepoByName } from "../../api/HomeAPI";
import { repoKeys } from "../../api/ApiUtils";
import PortfolioExternalLink from "../external-link";
import resumePdf from "../../assets/resume/andres-arana_front-end-developer.pdf";

const Footer = () => {
  const repoName = "ajarana.github.io";

  const { isError, isLoading, data } = useQuery(repoKeys.repo(repoName), () =>
    getRepoByName(repoName)
  );

  return (
    <footer
      id="footer"
      className="flexCentered"
    >
      <div className="mainContainer textAlignCenter">
        <h2 className="noMargin lightGray">
          <PortfolioExternalLink url={resumePdf}>Resume</PortfolioExternalLink>
        </h2>

        {!isError && !isLoading && (
          <h2 className="noMargin lightGray">
            Portfolio site last updated on:{" "}
            <span className="footer-updated-on">
              {moment(data.pushed_at).format("MMMM Do YYYY, h:mm:ss a")}
            </span>
          </h2>
        )}
      </div>
    </footer>
  );
};

export default Footer;
