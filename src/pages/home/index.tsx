import { CodeProjects } from "../../components/code-projects";
import "./index.scss";
import {
  faAngleRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExternalLink from "../../components/external-link";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { TYPOGRAPHY } from "../../styled-partials";

const HeroLink = styled(NavLink)`
  ${TYPOGRAPHY.text500}

  color: ${({ theme }) => theme.heroHeader.link.default};

  &:hover {
    color: ${({ theme }) => theme.heroHeader.link.hover};
  }
`;

const HomePage = () => {
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
                <HeroLink
                  as={ExternalLink}
                  href="https://github.com/ajarana/ajarana.github.io"
                >
                  Site code
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </HeroLink>
              </li>
              <li>
                <HeroLink
                  as={NavLink}
                  to="/resume"
                >
                  Resume
                  <FontAwesomeIcon icon={faAngleRight} />
                </HeroLink>
              </li>
            </ul>
          </div>
        </header>

        <CodeProjects projects={PROJECTS} />
      </article>
    </main>
  );
};

export default HomePage;
