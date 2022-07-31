import Alert from "../../components/alert";
import Resume from "../../components/resume";
import { ANDRES_CANDIDATE_INFO } from "../../constants";

const resumePdf = require("../../assets/andres-arana_front-end-developer.pdf");
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
					width. A{" "}
					<a
						href={resumePdf}
						target="_blank"
						rel="noreferrer"
						className="dark"
					>
						pdf version
					</a>{" "}
					is also available.
				</p>
			</Alert>

			<Resume candidate={ANDRES_CANDIDATE_INFO} />
		</main>
	);
};

export default ResumePage;
