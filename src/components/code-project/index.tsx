import { NavLink } from "react-router-dom";
import { Project } from "../../types/Project";
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
		lastUpdated,
		title,
		projectUrl,
		codeUrl,
	} = project;

	return (
		<section className="sectionContainer">
			<div className="project flexCenteredToFlexTopLeft flexWrapThenNoWrap invisible">
				<figure className="imageHolder flexCentered">
					<a
						href={projectUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							className="images"
							src={asset.src}
							alt={asset.alt}
							srcSet={asset.srcset}
						/>
					</a>
				</figure>

				<div className="listContainer">
					<header>
						<h3 className="sectionHeaders">
							{title}{" "}
							<span className="updated-time">Last updated: {lastUpdated}</span>
						</h3>

						<p>{description}</p>

						<p className="project-warning codeRed">{warning}</p>
					</header>

					<ul className="linkContainer">
						{projectUrl && (
							<li>
								<a
									href={projectUrl}
									className="linkIcon"
									target="_blank"
									rel="noopener noreferrer"
								>
									View project
								</a>
							</li>
						)}

						<li>
							<a
								href={codeUrl}
								className="linkIcon"
								target="_blank"
								rel="noopener noreferrer"
							>
								View code
							</a>
						</li>

						<li>
							<NavLink
								to={blogPath}
								className="linkIcon"
							>
								Read more
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
