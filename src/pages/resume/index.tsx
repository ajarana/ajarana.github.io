import Resume from "../../components/resume";
import { ANDRES_CANDIDATE_INFO } from "../../constants";
import resumePdf from "../../assets/resume/andres-arana_front-end-developer.pdf";
import styles from "./index.module.scss";
import ExternalLink from "../../components/external-link";
import Alert from "../../components/alert";

const ResumePage = () => {
  return (
    <main className={styles.resumePage}>
      <Alert heading="Note">
        <p>
          This resume is responsive and its layout will adjust to the viewport
          width. A <ExternalLink href={resumePdf}>pdf version</ExternalLink> is
          also available.
        </p>
      </Alert>
      test
      <Resume candidate={ANDRES_CANDIDATE_INFO} />
    </main>
  );
};

export default ResumePage;
