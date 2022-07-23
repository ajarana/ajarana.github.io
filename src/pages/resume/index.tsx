import Alert from "../../components/alert";
import Resume from "../../components/resume";
import { ANDRES_CANDIDATE_INFO } from "../../constants";

const styles = require("./index.module.scss").default;

const ResumePage = () => {
	return (
		<main className={styles.resumePage}>
			<Alert
				alertType="Informational"
				heading="Note"
			>
				<p>
					This resume is responsive and its layout will adjust to the viewport
					width.
				</p>
			</Alert>

			<Resume candidate={ANDRES_CANDIDATE_INFO} />
		</main>
	);
};

export default ResumePage;
