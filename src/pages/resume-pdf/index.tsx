import Resume from "../../components/resume";
import { ANDRES_CANDIDATE_INFO } from "../../constants";

const styles = require("./index.module.scss").default;

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
