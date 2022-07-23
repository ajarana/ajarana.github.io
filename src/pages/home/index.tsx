import { Component } from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { CodeProjects } from "../../components/code-projects";
import "./index.scss";

interface HomeState {
	githubData: {
		blockAid: {
			lastUpdated: string;
		};
		mixtin: {
			lastUpdated: string;
		};
		newsFeed: {
			lastUpdated: string;
		};
	};
}

class HomePage extends Component {
	state: HomeState = {
		githubData: {
			blockAid: {
				lastUpdated: "No data received yet.",
			},
			mixtin: {
				lastUpdated: "No data received yet.",
			},
			newsFeed: {
				lastUpdated: "No data received yet.",
			},
		},
	};

	opacityEffectHandler() {
		let projects = Array.from(document.getElementsByClassName("project"));

		const checkProjectBounds = () => {
			projects.forEach((project) => {
				let boundingRect = project.getBoundingClientRect();
				let upperPoint = boundingRect.bottom - boundingRect.height / 1.25;
				let lowerPoint = boundingRect.bottom - boundingRect.height / 5;

				if (
					(upperPoint > 0 && upperPoint < window.innerHeight) ||
					(lowerPoint > 0 && lowerPoint < window.innerHeight)
				) {
					if (project.classList.contains("invisible")) {
						project.classList.remove("invisible");
					}
				}
			});
		};

		window.setTimeout(() => {
			window.onscroll = () => {
				checkProjectBounds();
			};

			checkProjectBounds();
		}, 100);
	}

	async componentDidMount() {
		this.opacityEffectHandler();

		let blockResponse = await fetch(
			"https://api.github.com/repos/ajarana/agame"
		);

		let blockJson = await blockResponse.json();

		let formattedBlockJson = moment(blockJson.pushed_at).format(
			"MMMM Do YYYY, h:mm:ss a"
		);

		let mixtinResponse = await fetch(
			"https://api.github.com/repos/ajarana/mixtin"
		);

		let mixtinJson = await mixtinResponse.json();

		let formattedMixtinJson = moment(mixtinJson.pushed_at).format(
			"MMMM Do YYYY, h:mm:ss a"
		);

		let newsFeedResponse = await fetch(
			"https://api.github.com/repos/ajarana/arcade"
		);

		let newsFeedJson = await newsFeedResponse.json();

		let formattedNewsFeedJson = moment(newsFeedJson.pushed_at).format(
			"MMMM Do YYYY, h:mm:ss a"
		);

		this.setState({
			githubData: {
				...this.state.githubData,
				blockAid: {
					...this.state.githubData.blockAid,
					lastUpdated: formattedBlockJson,
				},
				mixtin: {
					...this.state.githubData.mixtin,
					lastUpdated: formattedMixtinJson,
				},
				newsFeed: {
					...this.state.githubData.newsFeed,
					lastUpdated: formattedNewsFeedJson,
				},
			},
		});
	}

	render() {
		const { githubData } = this.state;

		const projects = [
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
				lastUpdated: githubData.blockAid.lastUpdated,
				blogPath: "/blog/development-canvas-game",
				projectUrl: "https://ajarana.github.io/agame",
				codeUrl: "https://github.com/ajarana/agame",
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
				lastUpdated: githubData.mixtin.lastUpdated,
				blogPath: "/blog/development-bootstrap-3-site",
				projectUrl: "https://ajarana.github.io/mixtin",
				codeUrl: "https://github.com/ajarana/mixtin",
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
				lastUpdated: githubData.newsFeed.lastUpdated,
				blogPath: "/blog/development-reactjs-news-feed",
				codeUrl: "https://github.com/ajarana/arcade",
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
								resume design are my own. Below are some of my personal projects
								(<span className="codeRed">warning:</span> they are out of
								date).
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
	}
}

export default HomePage;
