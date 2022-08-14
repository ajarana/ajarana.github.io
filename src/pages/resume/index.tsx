import Alert from "../../components/alert";
import PortfolioExternalLink from "../../components/external-link";
import Resume from "../../components/resume";
import { ANDRES_CANDIDATE_INFO } from "../../constants";
import resumePdf from "../../assets/resume/andres-arana_front-end-developer.pdf";
import styles from "./index.module.scss";

const ResumePage = () => {
  return (
    <main className={styles.resumePage}>
      <Alert
        alertType="Informational"
        heading="Note"
      >
        <p>
          This resume is responsive and its layout will adjust to the viewport
          width. A{" "}
          <PortfolioExternalLink
            url={resumePdf}
            linkType="DarkLink"
          >
            pdf version
          </PortfolioExternalLink>{" "}
          is also available.
        </p>
      </Alert>

      <Resume candidate={ANDRES_CANDIDATE_INFO} />
    </main>
  );
};

export default ResumePage;
