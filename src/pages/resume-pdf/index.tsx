import Resume from "../../components/resume";
import { ANDRES_CANDIDATE_INFO } from "../../constants";
import styles from "./index.module.scss";

const ResumePdfPage = () => {
  return (
    <main className={styles.resumePage}>
      <Resume
        candidate={ANDRES_CANDIDATE_INFO}
        printMediaType={true}
      />
    </main>
  );
};

export default ResumePdfPage;
