import Resume from "../../components/resume";
import { ANDRES_CANDIDATE_INFO } from "../../constants";
import "./index.scss";

const ResumePage = () => {
	return (
		<main className="resume">
			<Resume candidate={ANDRES_CANDIDATE_INFO} />
		</main>
	);
};

export default ResumePage;
