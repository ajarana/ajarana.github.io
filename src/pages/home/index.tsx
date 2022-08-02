import { NavLink } from "react-router-dom";
import { CodeProjects } from "../../components/code-projects";
import "./index.scss";
import { Project } from "../../types/Project";

const HomePage = () => {
	const projects: Project[] = [
		{
			title: "Block Aid",
			description:
				"An HTML5 canvas game made with vanilla JavaScript and CSS3 via LESS. Maintains pixel-perfect quality even on high DPI screens.",
			asset: {
				src: "assets/agame/agame-1x.png",
				alt: "Screenshot of a memory game.",
				srcset:
					"assets/agame/agame-1x.png, assets/agame/agame-2x.png 2x, assets/agame/agame-4x.png 4x",
			},
			blogPath: "/blog/development-canvas-game",
			projectUrl: "https://ajarana.github.io/block-aid",
			codeUrl: "https://github.com/ajarana/block-aid",
			repoName: "block-aid",
		},
		{
			title: "Mixtin",
			description:
				"A responsive website designed and developed using Bootstrap 3 components, HTML5, and CSS3 via LESS.",
			asset: {
				src: "assets/mixtin/mixtin-1x-C.png",
				alt: "Screenshot of the mobile menu of a Bootstrap website.",
				srcset:
					"assets/mixtin/mixtin-1x-C.png, assets/mixtin/mixtin-2x-C.png 2x, assets/mixtin/mixtin-4x-C2.png 4x",
			},
			blogPath: "/blog/development-bootstrap-3-site",
			projectUrl: "https://ajarana.github.io/mixtin",
			codeUrl: "https://github.com/ajarana/mixtin",
			repoName: "mixtin",
		},
		{
			title: "News Feed",
			description:
				"A tech, gaming, and science news feed designed and developed using React, Redux, HTML5, and CSS3. Data is gathered from an external JSON API using Ajax via the Fetch API.",
			warning:
				"Unfortunately, this API has now only enabled CORS from localhost, so this project is no longer functional.",
			asset: {
				src: "assets/arcade/arcade-1x-C2.png",
				alt: "Screenshot of a news feed made using React and Redux.",
				srcset:
					"assets/arcade/arcade-1x-C2.png, assets/arcade/arcade-2x-C2.png 2x, assets/arcade/arcade-4x-C2.png 4x",
			},
			blogPath: "/blog/development-reactjs-news-feed",
			codeUrl: "https://github.com/ajarana/news-feed",
			repoName: "news-feed",
		},
	];

	return (
		<main>
			<article className="portfolio">
				<header
					id="introduction"
					className="main-container-full-width textAlignCenter"
				>
					<div className="hero-header-text">
						<h2>Front-End Developer</h2>

						<p>
							I am a front-end developer with a chemistry degree. This
							mobile-first web app was made with <span id="react">React</span>{" "}
							and, for the purposes of learning, without any{" "}
							<span id="css3">CSS3</span> frameworks/libraries or{" "}
							<span id="html5">HTML5</span> templates. Portfolio website and
							resume design are my own. Below are some of my personal projects (
							<span className="codeRed">warning:</span> they are out of date).
						</p>

						<ul className="linkContainer">
							<li>
								<a
									href="https://github.com/ajarana/ajarana.github.io"
									className="linkIcon"
									target="_blank"
									rel="noopener noreferrer"
								>
									Site code
								</a>
							</li>
							<li>
								<NavLink
									className="linkIcon"
									to="/resume/"
									rel="noopener noreferrer"
								>
									Resume
								</NavLink>
							</li>
						</ul>
					</div>
				</header>

				<CodeProjects projects={projects} />
			</article>
		</main>
	);
};

export default HomePage;
