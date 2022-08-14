import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import PortfolioExternalLink from "../external-link";
import PortfolioInternalLink from "../internal-link";
import "./index.scss";

class Header extends Component {
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
            <PortfolioInternalLink
              navLinkProps={{
                to: "/",
              }}
              linkType="PlainLink"
            >
              <span
                id="logo"
                className="flexLeft"
              >
                Andres
              </span>
            </PortfolioInternalLink>
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
                <PortfolioInternalLink
                  navLinkProps={{
                    to: "/",
                    exact: true,
                    activeClassName: "selected",
                  }}
                  linkType="PlainLink"
                >
                  <p>Home</p>
                </PortfolioInternalLink>
              </li>

              <li className="menuItems">
                <PortfolioInternalLink
                  navLinkProps={{
                    to: "/resume/",
                    activeClassName: "selected",
                  }}
                  linkType="PlainLink"
                >
                  <p>Resume</p>
                </PortfolioInternalLink>
              </li>

              <li className="menuItems">
                <PortfolioInternalLink
                  navLinkProps={{
                    to: "/blog/",
                    activeClassName: "selected",
                  }}
                  linkType="PlainLink"
                >
                  <p>Blog</p>
                </PortfolioInternalLink>
              </li>

              <li className="menuItems">
                <PortfolioExternalLink
                  url="https://github.com/ajarana/"
                  icon={faArrowUpRightFromSquare}
                >
                  GitHub
                </PortfolioExternalLink>
              </li>

              <li className="menuItems">
                <PortfolioExternalLink
                  url="https://codepen.io/ajarana/"
                  icon={faArrowUpRightFromSquare}
                >
                  CodePen
                </PortfolioExternalLink>
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
