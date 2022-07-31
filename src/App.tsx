import { Component } from "react";
import "normalize.css";
import "./App.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import ResponsiveCanvasDevelopment from "./pages/blog/ResponsiveCanvasDevelopment";
import CanvasGameDevelopment from "./pages/blog/CanvasGameDevelopment";
import Bootstrap3SiteDevelopment from "./pages/blog/Bootstrap3SiteDevelopment";
import NewsFeedDevelopment from "./pages/blog/NewsFeedDevelopment";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import ResumePage from "./pages/resume";
import ResumePdfPage from "./pages/resume-pdf";

class App extends Component {
	componentDidMount() {
		this.createGreeting();
	}

	createGreeting() {
		const style = `
      display: block;
      padding: 20px;
      margin: 10px;
      border: 2px solid #aaa;
      border-radius: 10px;
      font: 600 16px monospace; 
      line-height: 1.75;
    `;

		// eslint-disable-next-line no-console
		console.log(
			"%cHi, I'm Andres. I developed and designed this website. My resume can be found here: https://ajarana.github.io/#/resume/.",
			style
		);
	}

	render() {
		return (
			<Router>
				<ScrollToTop>
					<article>
						<Switch>
							{process.env.NODE_ENV === "development" && (
								<Route
									exact
									path="/resume-pdf"
									component={ResumePdfPage}
								/>
							)}
							<Route>
								<Header />

								<Route
									exact
									path="/"
									component={HomePage}
								/>
								<Route
									exact
									path="/blog"
									component={BlogPage}
								/>
								<Route
									exact
									path="/resume"
									component={ResumePage}
								/>
								<Route
									path="/blog/development-responsive-canvas"
									component={ResponsiveCanvasDevelopment}
								/>
								<Route
									path="/blog/development-canvas-game"
									component={CanvasGameDevelopment}
								/>
								<Route
									path="/blog/development-bootstrap-3-site"
									component={Bootstrap3SiteDevelopment}
								/>
								<Route
									path="/blog/development-reactjs-news-feed"
									component={NewsFeedDevelopment}
								/>

								<Footer />
							</Route>
						</Switch>
					</article>
				</ScrollToTop>
			</Router>
		);
	}
}

export default App;
