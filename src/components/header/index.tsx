import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

class Header extends React.Component {
	componentDidMount() {
		var mobileButton = document.getElementById(
			"mobileButton"
		) as HTMLButtonElement;
		var html = document.getElementsByTagName(
			"html"
		) as HTMLCollectionOf<HTMLElement>;
		var headerMenu = document.getElementById("headerMenu") as HTMLElement;
		var menuItems = document.getElementsByClassName(
			"menuItems"
		) as HTMLCollectionOf<HTMLElement>;

		for (let i = 0; i < menuItems.length; i++) {
			const menuItem = menuItems[i];

			menuItem.onclick = () => {
				headerMenu.classList.add("transitionCollapse");
				headerMenu.classList.remove("transitionExpand");
				html[0].classList.remove("expanded");
			};
		}

		mobileButton.onclick = function () {
			if (html[0].classList.contains("expanded")) {
				headerMenu.classList.add("transitionCollapse");
				headerMenu.classList.remove("transitionExpand");
				html[0].classList.remove("expanded");
			} else {
				headerMenu.classList.add("transitionExpand");
				headerMenu.classList.remove("transitionCollapse");
				html[0].classList.add("expanded");
			}
		};

		window.addEventListener(
			"resize",
			function () {
				headerMenu.classList.remove("transitionExpand");
				headerMenu.classList.remove("transitionCollapse");

				if (window.innerWidth >= 768) {
					html[0].classList.remove("expanded");
				}
			},
			false
		);
	}

	render() {
		return (
			<header id="header">
				<div className="mainContainer flexLeft">
					<div id="titleContainer">
						<NavLink
							className="plainLink"
							to="/"
						>
							<span
								id="logo"
								className="flexLeft"
							>
								Andres
							</span>
						</NavLink>
					</div>

					<div
						id="buttonWrapper"
						className="flexRight"
					>
						<button id="mobileButton">
							<span className="flexBottom">
								<span id="hamburgerWrapper">
									<span className="hamburgerIcon"></span>
									<span className="hamburgerIcon"></span>
									<span className="hamburgerIcon"></span>
								</span>
							</span>
						</button>
					</div>

					<nav>
						<ul
							id="headerMenu"
							className="transitionExpand"
						>
							<li className="menuItems">
								<NavLink
									to="/"
									exact
									className="textAlignCenter plainLink headerLink"
									activeClassName="selected"
								>
									<p>Home</p>
								</NavLink>
							</li>

							<li className="menuItems">
								<NavLink
									className="plainLink headerLink"
									to="/resume/"
									activeClassName="selected"
								>
									<p>Resume</p>
								</NavLink>
							</li>

							<li className="menuItems">
								<NavLink
									to="/blog/"
									className="plainLink headerLink"
									activeClassName="selected"
								>
									<p>Blog</p>
								</NavLink>
							</li>

							<li className="menuItems">
								<a
									className="plainLink headerLink"
									href="https://github.com/ajarana/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p className="external-header-link">GitHub</p>
								</a>
							</li>

							<li className="menuItems">
								<a
									className="plainLink headerLink"
									href="https://codepen.io/ajarana/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p className="external-header-link">CodePen</p>
								</a>
							</li>
						</ul>
					</nav>

					<div className="invis-aligner"></div>
				</div>
			</header>
		);
	}
}

export default Header;
